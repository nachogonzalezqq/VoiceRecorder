import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewRecordPage, PlayRecordPage, RecordsListPage } from '../components/pages/index';

const Stack = createNativeStackNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="RecordsList" component={RecordsListPage} />
				<Stack.Screen name="PlayRecord" component={PlayRecordPage} />
				<Stack.Screen name="NewRecord" component={NewRecordPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;