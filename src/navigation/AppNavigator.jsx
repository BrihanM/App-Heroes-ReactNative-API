import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'Superhéroes' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
};