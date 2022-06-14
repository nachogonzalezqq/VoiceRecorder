import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Record } from '../../organisms/records-list/records-list';

interface ListItemActions {
  onPressPlay: (arg0: Record) => void;
  onPressDelete: (arg0: Record) => void;
}

export interface ListItemProps {
  recordData: Record;
  actions: ListItemActions;
}

const ListItem = (props: ListItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.recordData.title}</Text>
			<Text>{props.recordData.timestamp}</Text>
			<View style={styles.actionsContainer}>
				<TouchableOpacity onPress={() => props.actions.onPressPlay(props.recordData)}>
					<Icon name='play' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.actions.onPressDelete(props.recordData)}>
					<Icon name='trash' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		display: 'flex',
		flexDirection: 'row',
		width: '95%',
		justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 12,
    borderWidth: 2,
    marginVertical: 3,
	},
  title: {
    maxWidth: '20%',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: .2
  }
});
