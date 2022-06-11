import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../../molecules';

export interface Record {
  fileUri: string;
  title: string;
  timestamp: number;
  id: string
};

interface RecordsListProps {
  records: Record[];
};

const RecordsList = (props: RecordsListProps) => {
	return (
		<View style={styles.container}>
			<FlatList
        data={props.records}
        renderItem={({item} : {item: Record}) => (<ListItem {...item}/>)}
        keyExtractor={(item: { id: any; }) => item.id}
      />
		</View>
	);
};

export default RecordsList;

const styles = StyleSheet.create({
	container: {
    flex: 0.6,
    backgroundColor: 'red',
  }
});
