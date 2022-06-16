import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { AudioPlayerProps } from "../../../types/types";
import styles from './styles';
import { processMiliseconds } from "../../../utils/logic-utils";

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioPlayer = (props: AudioPlayerProps) => {

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentProgress, setCurrentProgress] = useState('0%');

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
        const currentPosition = (e.currentPosition / e.duration) * 100;
        setCurrentProgress(`${currentPosition}%`);
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
  }
  return (
    <View style={styles.playerContainer}>
      <View style={styles.progressBarContainer}>
        <Text style={styles.durationText}>{processMiliseconds(props.duration)}</Text>
        <View style={[styles.duration, styles.progressBar]}/>
        <View style={[styles.progress, styles.progressBar, { width: currentProgress }]}/>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={togglePlaying}>
          {playing ? (
            <Icon name='pause' color="#213341" size={18} />
          ) : (
            <Icon name='play' color="#213341" size={18} />
          )}
				</TouchableOpacity>
				<TouchableOpacity onPress={onStopPress}>
					<Icon name='stop' color="#213341" size={18} />
				</TouchableOpacity>
      </View>
    </View>
  )
};

export default AudioPlayer;
