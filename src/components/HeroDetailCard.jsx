// Se importa React
import React from 'react';
// Se importan componentes: ScrollView, ImageBackground, Image, Text, View y Dimensions (aunque Dimensions no se utiliza aquí)
import { ScrollView, ImageBackground, Image, Text, View, Dimensions } from 'react-native';
// Se importan estilos específicos para este componente
import styles from '../styles/HeroDetailCard.styles';

// Se define y exporta el componente HeroDetailCard que recibe la propiedad 'hero'
export default function HeroDetailCard({ hero }) {
  return (
    // Se utiliza ScrollView para permitir el desplazamiento vertical del contenido
    <ScrollView contentContainerStyle={styles.container}>
      {/* Se muestra una imagen de fondo usando ImageBackground con desenfoque para dar efecto visual */}
      <ImageBackground
        source={{ uri: hero.image.url }}
        style={styles.background}
        blurRadius={10}
      >
        {/* Capa superpuesta semitransparente para oscurecer o dar un efecto */}
        <View style={styles.overlay} />
        {/* Card que contiene la imagen del héroe y su nombre */}
        <View style={styles.card}>  
          <Image source={{ uri: hero.image.url }} style={styles.image} />
          <Text style={styles.name}>{hero.name}</Text>
        </View>
      </ImageBackground>
      
      {/* Sección de información para la biografía */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Biografía</Text>
        {/* Se mapean todas las entradas del objeto 'biography' para mostrarlas como texto */}
        {Object.entries(hero.biography).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>
      
      {/* Sección de información para los poderes */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Poderes</Text>
        {Object.entries(hero.powerstats).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>
      
      {/* Sección de información para la apariencia */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Apariencia</Text>
        {Object.entries(hero.appearance).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>

      {/* Sección de información para el trabajo */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Trabajo</Text>
        {Object.entries(hero.work).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>

      {/* Sección de información para las conexiones */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Conexiones</Text>
        {Object.entries(hero.connections).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};