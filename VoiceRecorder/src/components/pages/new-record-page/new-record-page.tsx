import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NewRecordPageProps {}

const NewRecordPage = (props: NewRecordPageProps) => {
  return (
    <View style={styles.container}>
      <Text>NewRecordPage</Text>
    </View>
  );
};

export default NewRecordPage;

const styles = StyleSheet.create({
  container: {}
});