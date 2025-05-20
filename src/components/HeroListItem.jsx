// Se importa React
import React from 'react';
// Se importan componentes de React Native para crear una tarjeta táctil y mostrar imágenes y texto
import { TouchableOpacity, Image, View, Text } from 'react-native';
// Se importan los estilos específicos del ítem de héroe
import styles from '../styles/HeroListItem.styles';

// Se define y exporta el componente HeroListItem que recibe un héroe y una función onPress
export default function HeroListItem({ hero, onPress }) {
  return (
    // Se utiliza TouchableOpacity para hacer la tarjeta interactiva; al presionarla se ejecuta la función onPress pasando el héroe
    <TouchableOpacity style={styles.card} onPress={() => onPress(hero)}>
      {/* Se muestra la imagen del héroe utilizando el URL obtenido de la propiedad hero.image.url */}
      <Image source={{ uri: hero.image.url }} style={styles.avatar} />
      {/* Se crea una vista para contener el contenido textual */}
      <View style={styles.content}>
        {/* Se muestra el nombre del héroe */}
        <Text style={styles.name}>{hero.name}</Text>
        {/* Se muestra la alineación del héroe (ejemplo: good, bad, neutral) */}
        <Text style={styles.subtitle}>{hero.biography.alignment}</Text>
        {/* Se muestra el publicador del héroe */}
        <Text style={styles.subtitle}>{hero.biography.publisher}</Text>
      </View>
    </TouchableOpacity>
  );
};