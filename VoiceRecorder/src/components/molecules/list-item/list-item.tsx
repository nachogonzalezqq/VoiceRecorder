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
      <Text style={{maxWidth: '20%'}}>{props.recordData.title}</Text>
      <Text>{props.recordData.timestamp}</Text>
      <View>
        <TouchableOpacity>
          <Text>Test</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Test delete</Text>
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
    width: '100%',
    justifyContent: 'space-around'
  }
});
