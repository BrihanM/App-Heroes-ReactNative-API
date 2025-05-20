// Se importa React y hooks necesarios de 'react'
import React, { useEffect, useState, useCallback } from 'react';
// Se importa el componente View, FlatList y ActivityIndicator desde React Native
import { View, FlatList, ActivityIndicator } from 'react-native';
// Se importa el componente que representa un ítem individual de héroe
import HeroListItem from '../components/HeroListItem';
// Se importan los estilos específicos para la pantalla de la lista
import styles from '../styles/ListScreen.styles';
// Se importa la constante BASE_URL que indica la URL base para las peticiones a la API
import { BASE_URL } from '../config/api';

// Se definen constantes para el total de héroes y la cantidad de héroes por página
const TOTAL_HEROES = 731;
const PAGE_SIZE = 20;

// Se define el componente funcional ListScreen que recibe la propiedad 'navigation' (para navegación entre pantallas)
export default function ListScreen({ navigation }) {
  // Hook para almacenar la lista de héroes recuperados
  const [heroes, setHeroes] = useState([]);
  // Hook para almacenar el estado de carga (spinner mientras se obtienen datos)
  const [loading, setLoading] = useState(false);
  // Hook para almacenar el número de página actual
  const [page, setPage] = useState(1);

  // Función loadPage definida con useCallback para evitar recrearla en cada render,
  // encargada de obtener los datos de una página específica
  const loadPage = useCallback(async (pageNumber) => {
    // Se establece el estado de carga en verdadero mientras se realiza la petición
    setLoading(true);
    // Se calcula el primer id a solicitar en función del número de página
    const startId = (pageNumber - 1) * PAGE_SIZE + 1;
    // Se calcula el último id, cuidando que no se vaya más allá del total de héroes
    const endId = Math.min(pageNumber * PAGE_SIZE, TOTAL_HEROES);
    // Se genera un arreglo de ids que se quiere solicitar, basado en el rango calculado
    const ids = Array.from({ length: endId - startId + 1 }, (_, i) => startId + i);
    try {
      // Se utilizan Promise.all para hacer múltiples peticiones en paralelo
      // Cada id se usa para hacer una petición a la API y se transforma la respuesta en JSON
      const results = await Promise.all(
        ids.map(id => fetch(`${BASE_URL}/${id}`).then(res => res.json()))
      );
      // Se actualiza el estado de héroes:
      // Si es la primera página, se reemplazan los héroes;
      // de lo contrario, se agregan al listado existente
      setHeroes(prev => (pageNumber === 1 ? results : [...prev, ...results]));
    } catch (error) {
      // En caso de error, se muestra en la consola
      console.error('Error fetching heroes:', error);
    } finally {
      // Al finalizar, se desactiva el estado de carga
      setLoading(false);
    }
  }, []);

  // useEffect que se ejecuta cuando el componente se monta e invoca loadPage para la primera página (1)
  useEffect(() => {
    loadPage(1);
  }, [loadPage]);

  // Función que se llama al alcanzar el final del listado desplegado en el FlatList
  const handleEndReached = () => {
    // Se calcula la siguiente página
    const nextPage = page + 1;
    // Se obtiene la cantidad máxima de páginas
    const maxPage = Math.ceil(TOTAL_HEROES / PAGE_SIZE);
    // Solo se realiza la carga de la siguiente página si no se ha alcanzado el límite y no se está cargando actualmente
    if (nextPage <= maxPage && !loading) {
      setPage(nextPage);
      loadPage(nextPage);
    }
  };

  // Función que se invoca cuando se presiona un héroe del listado
  // Navega a la pantalla de detalle pasando el 'id' del héroe como parámetro
  const handlePress = hero => navigation.navigate('Detail', { heroId: hero.id });

  // Si no hay héroes en el estado y se está cargando, se muestra un indicador de actividad centrado
  if (!heroes.length && loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Renderizado del FlatList que muestra la lista de héroes
  return (
    <FlatList
      // Se pasa el arreglo de héroes como datos de la lista
      data={heroes}
      // Se define la clave única para cada elemento, usando el id convertido a cadena
      keyExtractor={item => item.id.toString()}
      // Se especifica cómo renderizar cada item utilizando el componente HeroListItem y la función handlePress
      renderItem={({ item }) => <HeroListItem hero={item} onPress={handlePress} />}
      // Se muestran 5 columnas por fila
      numColumns={5}
      // Se aplica el estilo a cada fila (wrapper de columnas)
      columnWrapperStyle={styles.row}
      // Se llama a handleEndReached al acercar al final del listado
      onEndReached={handleEndReached}
      // Se define un umbral para llamar a onEndReached (a la mitad del contenido)
      onEndReachedThreshold={0.5}
      // Se muestra un ActivityIndicator en el pie de la lista si hay carga en progreso
      ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
    />
  );
};