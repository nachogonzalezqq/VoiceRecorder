import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewRecordPage, PlayRecordPage, RecordsListPage } from '../components/pages/index';

const Stack = createNativeStackNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: {
					backgroundColor: '#D2BEBF'
				}
			}}>
				<Stack.Screen name="RecordsList" options={{title: 'Your records'}} component={RecordsListPage} />
				<Stack.Screen name="PlayRecord" options={{title: ''}} component={PlayRecordPage} />
				<Stack.Screen name="NewRecord" options={{title: 'Create new record'}} component={NewRecordPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;