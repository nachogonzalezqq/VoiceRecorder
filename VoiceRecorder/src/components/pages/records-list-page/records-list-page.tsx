import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
import { RecordsList } from '../../organisms/index';
import { Record } from '../../organisms/records-list/records-list';
import { ListItemProps } from '../../molecules/list-item/list-item';
interface RecordsListPageProps {}

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
	const onPressDebug = () => {
		console.log('this is our debug');
		const test = 'We should see this only using breakpoints';
		return test;
	};
  const onPressPlay = (item: Record) => {
    console.log('playing');
    console.log(item);
  }
  const onPressDelete = (item: Record) => {
    console.log('deleting');
    console.log(item);
  }
  const processedDemoData: ListItemProps[] = demoData.map(item => ({recordData: {...item}, actions: {onPressDelete, onPressPlay}}))
	return (
		<View style={styles.container}>
			<RecordsList records={processedDemoData}/>
			<Button title="Debug" onPress={onPressDebug}  />
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
	}
});
