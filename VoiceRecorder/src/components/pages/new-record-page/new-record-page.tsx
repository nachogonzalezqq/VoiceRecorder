import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Recorder from '../../organisms/recorder/recorder';

const NewRecordPage = () => {
	return (
		<View style={styles.container}>
			<Recorder />
		</View>
	);
};

export default NewRecordPage;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#AFA7B2',
	}
});