import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItemProps } from '../../../types/types';

const ListItem = (props: ListItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.recordData.title}</Text>
			<Text style={styles.date}>{moment(props.recordData.timestamp).format('DD/MM/YY')}</Text>
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
		width: '92%',
		justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 3,
    paddingVertical: 10,
	},
  title: {
    color: '#213341',
		flex: 0.2
  },
  date: {
    color: '#213341',
		flex: 0.2,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: .2
  }
});
