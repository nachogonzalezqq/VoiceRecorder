import { Button } from "@react-native-material/core";
import React, { useState } from "react";
import { View, Text, Platform, PermissionsAndroid, TextInput } from "react-native";
import RNFS from 'react-native-fs';
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 } from 'uuid';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { processMiliseconds } from "../../../utils/logic-utils";
import AudioPlayer from "../../molecules/audio-player/audio-player";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Record, RootStackParamList } from "../../../types/types";
import AsyncStorageHelper from "../../../services/async-storage-helper";
import { StackNavigationProp } from "@react-navigation/stack";

const audioRecorderPlayer = new AudioRecorderPlayer();

const Recorder = () => {
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioSource, setAudioSource] = useState('');
  const [audioTitle, setAudioTitle] = useState('');
  const [missingTitleErrorVisible, setMissingErrorVisible] = useState(false);
  const [recording, setRecording] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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

  const deleteLastFile = async () => {
    console.log('about to delete last saved file');
    console.log(audioSource);
    try {
      const result = await RNFS.unlink(audioSource);
      console.log('delete result');
      console.log(result);
    } catch (error) {
      console.log('error while deleting');
    }
  }
  const startRecording = async () => {
    try {
      if (audioSource) deleteLastFile();
      const permissionsResult = await checkPermissions();
      if (permissionsResult) {
        const audioId = v4();
        await audioRecorderPlayer.startRecorder(`${RNFS.DocumentDirectoryPath}/${audioId}.mp3`);
        setRecording(true);
        setAudioSource('');
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
    setRecording(false);
  };

  const confirmRecordSave = async () => {
    if (audioTitle === '') {
      setMissingErrorVisible(true);
      return;
    }
    const dateObject = new Date();
    const newRecord: Record = {
      id: v4(),
      title: audioTitle,
      timestamp: dateObject.getTime(),
      duration: audioDuration,
      fileUri: audioSource,
    }
    await AsyncStorageHelper.addRecord(newRecord);
    navigation.navigate('RecordsList', {});
  };

  const recordButtonLeftMargin = audioSource ? '0%' : '25%';

  return (
    <View style={styles.recorderContainer}>
      <View style={styles.titleInputContainer}>
        <Text style={styles.titleLabel}>Title:</Text>
        <TextInput placeholder="Your record title" onChange={e => setAudioTitle(e.nativeEvent.text)} value={audioTitle} style={styles.titleInput} />
        {missingTitleErrorVisible && (
          <Text style={styles.errorMessage}>You must enter a title</Text>
        )}
      </View>
      <View style={styles.actionsContainer}>
        <Button style={{backgroundColor: '', padding: 5, marginLeft: recordButtonLeftMargin}} title={() => (<Icon name="circle" color='red' size={30}/>)} onPress={recording ? stopRecording : startRecording} />
        {(audioSource !== '') && (
          <Button style={{backgroundColor: '', padding: 5}} title={() => (<Icon name="save" size={30} />)} onPress={confirmRecordSave} />
        )}
      </View>
      {(audioSource !== '') ? (
        <AudioPlayer source={audioSource} duration={audioDuration}/>
      ) : (
        <Text>{processMiliseconds(audioDuration)}</Text>
      )}
    </View>
  )
};

export default Recorder;
