import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RecordsListProps {}

const RecordsList = (props: RecordsListProps) => {
  return (
    <View style={styles.container}>
      <Text>RecordsList</Text>
    </View>
  );
};

export default RecordsList;

const styles = StyleSheet.create({
  container: {}
});
