// Se importa React
import React from 'react';
// Se importa la función para crear un stack de navegación nativa
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Se importan las pantallas: ListScreen (lista de héroes) y DetailScreen (detalle de un héroe)
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

// Se crea una instancia del stack de navegación
const Stack = createNativeStackNavigator();

// Se define y exporta el componente AppNavigator que configura las rutas de la aplicación
export default function AppNavigator() {
  return (
    // Se define el contenedor de navegación con una configuración común para los headers (centrado)
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      
      <Stack.Screen name="List" component={ListScreen} options={{ title: 'Super héroes' }} />
      
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalles del personaje' }} />
    </Stack.Navigator>
  );
};