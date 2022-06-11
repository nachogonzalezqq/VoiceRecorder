import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RecordsListPageProps {}

const RecordsListPage = (props: RecordsListPageProps) => {
  return (
    <View style={styles.container}>
      <Text>RecordsListPage</Text>
    </View>
  );
};

export default RecordsListPage;

const styles = StyleSheet.create({
  container: {}
});
