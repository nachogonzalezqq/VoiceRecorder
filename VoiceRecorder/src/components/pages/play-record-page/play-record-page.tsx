import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface PlayRecordPageProps {}

const PlayRecordPage = (props: PlayRecordPageProps) => {
	return (
		<View style={styles.container}>
			<Text>PlayRecordPage</Text>
		</View>
	);
};

export default PlayRecordPage;

const styles = StyleSheet.create({
	container: {}
});
