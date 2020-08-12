// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class App extends PureComponent {
  state = {
    cameraType: RNCamera.Constants.Type.back,
    videoQuality: RNCamera.Constants.VideoQuality.auto,
    whiteBalance: RNCamera.Constants.WhiteBalance.auto,
    autoFocus: RNCamera.Constants.AutoFocus.on,
    flashMode: RNCamera.Constants.FlashMode.auto,
    previewEnabled: true,
    mirrorVideo: false,
    lastBarcodeData: null,
    videoRecording: false,
    outputText: 'Initializing',
    outputCycle: 0,
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>Camera Demo</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.containerLeft}>
            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={this.state.cameraType}
              defaultVideoQuality={this.state.videoQuality}
              whiteBalance={this.state.whiteBalance}
              autoFocus={this.state.autoFocus}
              flashMode={this.state.flashMode}
              mirrorVideo={this.state.mirrorVideo}
              onBarCodeRead={this.onBarCodeRead.bind(this)}
              barCodeReadIntervalMS={1000}
            />
            <View style={styles.outputBox}>
              <Text style={styles.outputText}>{ this.state.outputText }</Text>
            </View>
          </View>
          <View style={styles.containerRight}>
            <Text style={styles.subtitleText}>Actions</Text>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.recordVideo.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>{ this.state.videoRecording ? 'Stop Video' : 'Record Video' }</Text>
            </TouchableOpacity>
            <Text style={styles.subtitleText}>Options</Text>
            <TouchableOpacity onPress={this.cycleCameraType.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Camera ({ this.getConstantString(RNCamera.Constants.Type, this.state.cameraType).toUpperCase() })</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toggleMirrorVideo.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Mirror Video ({ `${this.state.mirrorVideo}`.toUpperCase() })</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.togglePreview.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Preview ({ `${this.state.previewEnabled}`.toUpperCase() })</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.cycleVideoQuality.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Quality ({ this.getConstantString(RNCamera.Constants.VideoQuality, this.state.videoQuality).toUpperCase() })</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.cycleWhiteBalance.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>White Balance ({ this.getConstantString(RNCamera.Constants.WhiteBalance, this.state.whiteBalance).toUpperCase() })</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.cycleAutoFocus.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Auto Focus ({ this.getConstantString(RNCamera.Constants.AutoFocus, this.state.autoFocus).toUpperCase() })</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.cycleFlashMode.bind(this)} style={styles.buttonBox}>
              <Text style={styles.buttonText}>Flash Mode ({ this.getConstantString(RNCamera.Constants.FlashMode, this.state.flashMode).toUpperCase() })</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.lastBarcodeData) {
        let outputText = `Barcode Read: (Type: ${this.getConstantString(RNCamera.Constants.BarCodeType, this.state.lastBarcodeData.type)} Data: "${this.state.lastBarcodeData.data}")`;
        this.setState({outputText, outputCycle: 0, lastBarcodeData: null})
      } else {
        let outputText = this.state.outputText;
        let outputCycle = this.state.outputCycle;

        if (outputText.startsWith('Initializing')) {
          if (outputCycle === 4) {
            outputText = 'Idle';
            outputCycle = 0;
          } else {
            outputText = `Initializing${Array(outputCycle +  1).join(".")}`;  
          }
        } else if (this.state.videoRecording) {
          if (outputCycle === 4) {
            outputCycle = 0;
          } else {
            outputText = `Recording${Array(outputCycle +  1).join(".")}`;  
          }
        } else if (outputText === 'Idle') {
          if (outputCycle === 4) {
            outputCycle = 0;
          }
        } else {
          if (outputCycle === 4) {
            outputText = 'Idle';
            outputCycle = 0;
          }
        }

        outputCycle = outputCycle + 1;

        this.setState({outputText, outputCycle});
      }

    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onBarCodeRead = async(data) => {
    console.log(data);
    this.setState({lastBarcodeData: data});
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1, base64: true, writeExif: true, exif: true };

      this.camera
        .takePictureAsync(options)
        .then(data => {
          console.log(data);
          let outputText = `Photo saved to ${data.uri}`;
          let outputCycle = 0;
          this.setState({outputText, outputCycle});
        })
        .catch(err => console.error(err));
    }
  };

  recordVideo = async () => {
    if (this.camera) {
      const options = { maxDuration: 3600 };

      var isRecording = await this.camera.isRecording();
      if (!isRecording) {
        this.camera
        .recordAsync(options)
        .then(data => {
          console.log(data);
          let outputText = `Video saved to ${data.uri}`;
          let outputCycle = 0;
          this.setState({videoRecording: false, outputText, outputCycle});
        })
        .catch(err => console.error(err));
        this.setState({videoRecording: true, outputCycle: 0});
      } else {
        this.camera.stopRecording();
        this.setState({videoRecording: false, outputCycle: 0});
      }
    }
  };

  togglePreview = async () => {
    if (this.camera) {
      if (this.state.previewEnabled) {
        this.camera.pausePreview();
        this.setState({previewEnabled: false});
      } else {
        this.camera.resumePreview();
        this.setState({previewEnabled: true});
      }
    }
  };

  toggleMirrorVideo = async () => {
    this.setState({mirrorVideo: !this.state.mirrorVideo});
  };

  cycleCameraType = async () => {
    await this.cycleConstant(RNCamera.Constants.Type, 'cameraType');
  };

  cycleVideoQuality = async () => {
    await this.cycleConstant(RNCamera.Constants.VideoQuality, 'videoQuality');
  };

  cycleWhiteBalance = async () => {
    await this.cycleConstant(RNCamera.Constants.WhiteBalance, 'whiteBalance');
  };

  cycleAutoFocus = async () => {
    await this.cycleConstant(RNCamera.Constants.AutoFocus, 'autoFocus');
  };

  cycleFlashMode = async () => {
    await this.cycleConstant(RNCamera.Constants.FlashMode, 'flashMode');
  };

  cycleConstant= async (constantObject, stateVariableKey) => {
    var constantKeys = Object.keys(constantObject);

    var oldValue = this.state[stateVariableKey];
    var oldIndex = constantKeys.findIndex(key => constantObject[key] == oldValue);

    var newIndex = (oldIndex + 1) % constantKeys.length;
    var newValue = constantObject[constantKeys[newIndex]];

    console.log(`Changing ${stateVariableKey} from ${this.getConstantString(constantObject, oldValue)} to ${this.getConstantString(constantObject, newValue)}`);

    var newStateObject = {};
    newStateObject[stateVariableKey] = newValue;

    this.setState(newStateObject);
  }

  getConstantString = (constantObject, value) => {
    var constantKeys = Object.keys(constantObject);
    return constantKeys.find(key => constantObject[key] === value);
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  containerLeft: {
    flexGrow: 9999,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 5,
  },
  containerRight: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 5,
  },
  titleBox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 48,
    color: 'white'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonBox: {
    flex: 0,
    borderColor: 'white',
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  outputBox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  outputText: {
    fontSize: 12,
    color: 'white',
  },
  subtitleText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

export default App;
