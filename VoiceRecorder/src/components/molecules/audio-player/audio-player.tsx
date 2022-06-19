import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { AudioPlayerProps } from "../../../types/types";
import styles from './styles';
import { processMiliseconds } from "../../../utils/logic-utils";
import { Button } from "@react-native-material/core";

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioPlayer = (props: AudioPlayerProps) => {

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentProgress, setCurrentProgress] = useState('0%');
  const [currentPosition, setCurrentPosition] = useState(0);

  const playback = async () => {
    if (!paused) {
      await audioRecorderPlayer.startPlayer(props.source);
      audioRecorderPlayer.addPlayBackListener(e => {
        console.log(e);
        if (e.currentPosition === e.duration){
          audioRecorderPlayer.removePlayBackListener();
          setPlaying(false);
          setCurrentProgress('0%');
          return;
        };
        setCurrentPosition(e.currentPosition);
        const positionPercentage = (e.currentPosition / e.duration) * 100;
        setCurrentProgress(`${positionPercentage}%`);
      })
    } else {
      audioRecorderPlayer.resumePlayer();
    }
    setPlaying(true);
  };
  
  const pausePlayback = () => {
    audioRecorderPlayer.pausePlayer();
    setPlaying(false);
    setPaused(true);
  };

  const IconPlay = () => (<Icon name='play' color="#213341" size={18} />);

  const IconPause = () => (<Icon name='pause' color="#213341" size={18} />);

  const togglePlaying = () => {
    if (!playing) {
      playback();
    } else {
      pausePlayback();
    }
  };
  const onStopPress = () => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setPaused(false);
    setPlaying(false);
    setCurrentProgress('0%');
  };

  const milisecondsToProcess =  (playing || paused) ? currentPosition : props.duration;

  return (
    <View style={styles.playerContainer}>
      <View style={styles.progressBarContainer}>
        <Text style={styles.durationText}>{processMiliseconds(milisecondsToProcess)}</Text>
        <View style={[styles.duration, styles.progressBar]}/>
        <View style={[styles.progress, styles.progressBar, { width: currentProgress }]}/>
      </View>
      <View style={styles.actionsContainer}>
        {/* <TouchableOpacity onPress={togglePlaying}>
          {playing ? (
            <Icon name='pause' color="#213341" size={18} />
          ) : (
            <Icon name='play' color="#213341" size={18} />
          )}
				</TouchableOpacity> */}
        <Button style={{backgroundColor: 'transparent', padding: 5}} title={playing ? <IconPause /> : <IconPlay />} onPress={togglePlaying}/>
				<Button style={{backgroundColor: 'transparent', padding: 5}} title={<Icon name='stop' color="#213341" size={18} />} onPress={onStopPress}/>
      </View>
    </View>
  )
};

export default AudioPlayer;
