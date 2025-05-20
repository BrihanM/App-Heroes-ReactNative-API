// Se importa React y hooks necesarios para el manejo de estado y efectos
import React, { useEffect, useState } from 'react';
// Se importan componentes de React Native: View y ActivityIndicator
import { View, ActivityIndicator } from 'react-native';
// Se importa el componente que muestra la tarjeta de detalle del héroe
import HeroDetailCard from '../components/HeroDetailCard';
// Se importan los estilos específicos para la pantalla de detalle
import styles from '../styles/DetailScreen.styles';
// Se importa BASE_URL para construir la URL de la API
import { BASE_URL } from '../config/api';

// Se define y exporta el componente DetailScreen que recibe la propiedad 'route'
export default function DetailScreen({ route }) {
  // Se extrae el id del héroe desde los parámetros de la ruta
  const { heroId } = route.params;
  // Se define un estado para almacenar los datos del héroe
  const [hero, setHero] = useState(null);
  // Se define un estado para controlar el indicador de carga
  const [loading, setLoading] = useState(true);

  // useEffect para realizar la petición a la API cuando se monta el componente o cambia el heroId
  useEffect(() => {
    // Se realiza la petición a la API utilizando el heroId
    fetch(`${BASE_URL}/${heroId}`)
      // Se transforma la respuesta en JSON
      .then(res => res.json())
      // Se guarda la información del héroe en el estado
      .then(data => setHero(data))
      // Finalmente, se desactiva el estado de carga
      .finally(() => setLoading(false));
  }, [heroId]);

  // Mientras se cargan los datos, se muestra un indicador grande en una vista centrada
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Una vez finalizada la carga, se renderiza el componente HeroDetailCard pasando el héroe obtenido
  return <HeroDetailCard hero={hero} />;
}