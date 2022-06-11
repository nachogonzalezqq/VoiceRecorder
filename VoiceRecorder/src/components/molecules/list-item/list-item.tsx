import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Record } from '../../organisms/records-list/records-list';

const ListItem = (props: Record) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {}
});
