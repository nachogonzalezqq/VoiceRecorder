import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from "@react-native-material/core";

interface RecordsListPageProps {}

const RecordsListPage = (props: RecordsListPageProps) => {
  const onPressDebug = () => {
    console.log('this is our debug');
    const test = 'We should see this only using breakpoints';
    return test;
  }
  return (
    <View style={styles.container}>
      <Text>RecordsListPage</Text>
      <Button title="Debug" onPress={onPressDebug} />
    </View>
  );
};

export default RecordsListPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
