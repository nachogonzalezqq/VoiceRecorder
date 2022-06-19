import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Record } from '../../../types/types';
import AudioPlayer from '../../molecules/audio-player/audio-player';

interface PlayRecordPageProps {
	route: {
		params : {
			record: Record;
		};
	};
}

const PlayRecordPage = (props: PlayRecordPageProps) => {
	useEffect(() => {
		console.log(props);
		console.log(props.route.params);
	}, [])
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{props.route.params.record.title}</Text>
			</View>
			<View style={styles.playerContainer}>
				<AudioPlayer duration={props.route.params.record.duration} source={props.route.params.record.fileUri} />
			</View>
		</View>
	);
};

export default PlayRecordPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
		backgroundColor: '#AFA7B2',
	},
	titleContainer: {
		marginTop: 100,
	},
	title: {
		fontSize: 24,
		color: '#213341'
	},
	playerContainer: {
		marginTop: 100,
		alignItems: 'center',
		width: '80%'
	},
});
