import React from 'react';
import { ScrollView, ImageBackground, Image, Text, View, Dimensions } from 'react-native';
import styles from '../styles/HeroDetailCard.styles';

export default function HeroDetailCard({ hero }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{ uri: hero.image.url }}
        style={styles.background}
        blurRadius={10}
      >
        <View style={styles.overlay} />
        <View style={styles.card}>  
          <Image source={{ uri: hero.image.url }} style={styles.image} />
          <Text style={styles.name}>{hero.name}</Text>
        </View>
      </ImageBackground>
      
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Biografía</Text>
        {Object.entries(hero.biography).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Poderes</Text>
        {Object.entries(hero.powerstats).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Apariencia</Text>
        {Object.entries(hero.appearance).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Trabajo</Text>
        {Object.entries(hero.work).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            <Text style={styles.label}>{key}:</Text> {value}
          </Text>
        ))}
      </View>

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