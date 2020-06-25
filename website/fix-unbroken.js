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
exclusions.push(normalizePath('!blog\\2019-'));
exclusions.push('');

// MyBuild Sessions
exclusions.push('URL not found https://mybuild.microsoft.com/sessions/b1306a79-b43b-43be-bd59-460b8db0c7a8 while parsing blog/2020-06-01-build2020recap.md (HTTP 404)');
exclusions.push('URL not found https://mybuild.microsoft.com/sessions/d10c502e-325d-4c77-9471-462b37744db1 while parsing blog/2020-06-01-build2020recap.md (HTTP 404)');
exclusions.push('URL not found https://mybuild.microsoft.com/sessions/53ccd339-7cc0-4e66-bdb9-3eee6b270658 while parsing blog/2020-06-01-build2020recap.md (HTTP 404)');
exclusions.push('URL not found https://mybuild.microsoft.com/sessions/cf5901a1-2cd2-4913-b4b7-f1af32db934a while parsing blog/2020-06-01-build2020recap.md (HTTP 404)');
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
