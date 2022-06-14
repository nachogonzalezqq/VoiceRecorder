import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
import { RecordsList } from '../../organisms/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Record, RecordsListPageProps, RootStackParamList, ListItemProps } from '../../../types/types';

const demoData: Record[] = [
	{
		id: '1',
		title: 'test record 1 longer title',
		timestamp: 123456,
		fileUri: 'test uri',
	},
	{
		id: '2',
		title: 'test record 1',
		timestamp: 123456,
		fileUri: 'test uri',
	},
	{
		id: '3',
		title: 'test record 1',
		timestamp: 123456,
		fileUri: 'test uri',
	}
];



const RecordsListPage = (props: RecordsListPageProps) => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const onNewRecordPress = () => {
		navigation.navigate('NewRecord', {});
	};
	const onPressPlay = (item: Record) => {
		console.log('playing');
		console.log(item);
		navigation.navigate('PlayRecord', {record: item})
	};
	const onPressDelete = (item: Record) => {
		console.log('deleting');
		console.log(item);
	};
	const processedDemoData: ListItemProps[] = demoData.map(item => ({recordData: {...item}, actions: {onPressDelete, onPressPlay}}));
	return (
		<View style={styles.container}>
			<RecordsList records={processedDemoData}/>
			<Button title="New record" onPress={onNewRecordPress}  />
		</View>
	);
};

export default RecordsListPage;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#AFA7B2',
	}
});
