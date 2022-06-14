import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../../molecules';
import { ListItemProps } from '../../molecules/list-item/list-item';

export interface Record {
  fileUri: string;
  title: string;
  timestamp: number;
  id: string
};

interface RecordsListProps {
  records: ListItemProps[];
};

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
    backgroundColor: 'red',
    width: '70%',
    alignItems: 'center'
  }
});
