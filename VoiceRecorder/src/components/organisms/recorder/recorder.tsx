import { Button } from "@react-native-material/core";
import React, { useState } from "react";
import { View, Text, Platform, PermissionsAndroid } from "react-native";
import RNFS from 'react-native-fs';
import 'react-native-get-random-values';
import { v4 } from 'uuid';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { processMiliseconds } from "../../../utils/logic-utils";
import AudioPlayer from "../../molecules/audio-player/audio-player";

const audioRecorderPlayer = new AudioRecorderPlayer();

const Recorder = () => {
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioSource, setAudioSource] = useState('');
  const checkPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.warn(err);
        throw err;
      }
    }
  }
  const startRecording = async () => {
    try {
      const permissionsResult = await checkPermissions();
      if (permissionsResult) {
        console.log('pre id');
        const audioId = v4();
        console.log('post id');
        console.log('pre directory path');
        const directoryPath = RNFS.DocumentDirectoryPath;
        await audioRecorderPlayer.startRecorder(`${RNFS.DocumentDirectoryPath}/${audioId}.mp3`);
        //await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener(e => {
          setAudioDuration(e.currentPosition);
        })
      }else { 
        console.log('could not get permissions');
      }
    } catch (error) {
      console.log('unexpected error while recording');
      console.log(error);
    }
  };
  const stopRecording = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setAudioSource(result);
  };
  return (
    <View>
      {(audioSource !== '') && (
        <AudioPlayer source={audioSource} duration={audioDuration}/>
      )}
      <Text>{processMiliseconds(audioDuration)}</Text>
      <Button title="Start recording" onPress={startRecording} />
      <Button title="Stop recording" onPress={stopRecording} />
    </View>
  )
};

export default Recorder;
