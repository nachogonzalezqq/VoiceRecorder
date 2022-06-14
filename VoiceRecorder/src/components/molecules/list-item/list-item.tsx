import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItemProps } from '../../../types/types';

const ListItem = (props: ListItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.recordData.title}</Text>
			<Text style={styles.date}>{props.recordData.timestamp}</Text>
			<View style={styles.actionsContainer}>
				<TouchableOpacity onPress={() => props.actions.onPressPlay(props.recordData)}>
					<Icon name='play' color="#213341" size={18} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.actions.onPressDelete(props.recordData)}>
					<Icon name='trash' color="#213341" size={18} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5E7E4',
		display: 'flex',
		flexDirection: 'row',
		width: '95%',
		justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 3,
    paddingVertical: 10,
	},
  title: {
    maxWidth: '30%',
    color: '#213341',
  },
  date: {
    color: '#213341'
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: .2
  }
});
