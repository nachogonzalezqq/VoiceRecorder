import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../../molecules';
import { ListItemProps, RecordsListProps } from '../../../types/types';

const RecordsList = (props: RecordsListProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={props.records}
				renderItem={({item} : {item: ListItemProps}) => (<ListItem {...item}/>)}
				keyExtractor={(item: ListItemProps) => item.recordData.id}
			/>
		</View>
	);
};

export default RecordsList;

const styles = StyleSheet.create({
	container: {
		flex: 0.6,
		// backgroundColor: '#D2BEBF',
    borderRadius: 10,
		width: '80%',
		alignItems: 'center'
	}
});
