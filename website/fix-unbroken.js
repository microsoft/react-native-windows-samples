/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const fs = require('fs');
const path = require('path');

const versions = require('./versions.json');

const normalizePath = str => path.normalize(str).replace(/\\/g, '/');

console.log('Scanning asset files...');
var assetFiles = fs.readdirSync('../docs/assets');

console.log('Scanning versioned docs...');
var versionedDocs = {};
versions.forEach(version => {
    var versionDir = `versioned_docs\\version-${version}`;
    var files = fs.readdirSync(versionDir);
    files.forEach(file => {
        if (!versionedDocs.hasOwnProperty(version)) {
            versionedDocs[version] = [];
        }
        versionedDocs[version].push(path.join(versionDir, file));
    });
});

console.log('Processing file redirections...');

var redirectedFiles = [];

for (let i = 0; i < versions.length; i++) {
    const docs = versionedDocs[versions[i]];

    docs.forEach(doc => {
        const contents = fs.readFileSync(doc).toString();
    
        // Look for asset references
        assetFiles.forEach(assetFile => {
            const assetPath = `assets/${assetFile}`;
            if (contents.includes(`(${assetPath})`) || contents.includes(`src="${assetPath}"`)) {
                redirectedFiles.push({ source: doc, target: assetPath });
            }
        });
    
        // Look for references to docs in prior versions
        for (let j = i + 1; j < versions.length; j++) {
            const earlierDocs = versionedDocs[versions[j]];
            earlierDocs.forEach(earlierDoc => {
                const edFile = path.basename(earlierDoc);
                if (contents.search(`(${edFile})`) >= 0) {
                    redirectedFiles.push({ source: doc, target: edFile });
                }
            });
        }
    
    });

}

console.log('Generating exclusions...');

var exclusions = [];

// Base exclusions
exclusions.push(normalizePath('!node_modules'));
exclusions.push(normalizePath('!blog\\2019-*'));
exclusions.push(normalizePath('!blog\\2020-*'));
exclusions.push('');

// Redirected files exclusions
redirectedFiles.forEach(redirectedFile => {
    exclusions.push(`File not found ${normalizePath(redirectedFile.target)} while parsing ${normalizePath(redirectedFile.source)}`);
});

console.log('Updating .unbroken_exclusions...')
var exclusions_file = fs.createWriteStream('.unbroken_exclusions');
exclusions_file.on('error', function(err) { /* error handling */ });
exclusions.forEach(function(v) {
    console.log('Excluding: ' + v);
    exclusions_file.write(v + '\r\n');
});
exclusions_file.end();
