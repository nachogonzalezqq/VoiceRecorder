import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
import { RecordsList } from '../../organisms/index';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Record, RecordsListPageProps, RootStackParamList, ListItemProps } from '../../../types/types';
import AsyncStorageHelper from '../../../services/async-storage-helper';
import ConfirmModal from '../../molecules/confirm-modal/confirm-modal';

const RecordsListPage = (props: RecordsListPageProps) => {
	const [records, setRecords] = useState([]);
	const [recordToDelete, setRecordToDelete] = useState<Record>();

	const isFocused = useIsFocused();

	const getStoredRecords = async () => {
		const storedRecords = await AsyncStorageHelper.getRecordsList();
		console.log('stored records');
		console.log(storedRecords);
		setRecords(storedRecords ? storedRecords : []);
	};
	useEffect(() => {
		if (isFocused) {
			getStoredRecords();
		}
	}, [isFocused])
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
		setRecordToDelete(item);
	};
	const onDeleteConfirm = async () => {
		if (recordToDelete) {
			await AsyncStorageHelper.deleteRecord(recordToDelete);
			setRecordToDelete(undefined);
			getStoredRecords();
		}
	};
	const onDeleteCancel = () => setRecordToDelete(undefined);

	const processedRecords: ListItemProps[] = records.map(item => ({recordData: item, actions: {onPressDelete, onPressPlay}}));

	return (
		<View style={styles.container}>
			<RecordsList records={processedRecords}/>
			<Button title="New record" onPress={onNewRecordPress} color="#D2BEBF" />
			{recordToDelete && (
				<ConfirmModal onCancel={onDeleteCancel} onConfirm={onDeleteConfirm} />
			)}
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
