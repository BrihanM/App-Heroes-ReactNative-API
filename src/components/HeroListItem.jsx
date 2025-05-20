import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from '../styles/HeroListItem.styles';

export default function HeroListItem({ hero, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(hero)}>
      <Image source={{ uri: hero.image.url }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{hero.name}</Text>
        <Text style={styles.subtitle}>{hero.biography.alignment}</Text>
        <Text style={styles.subtitle}>{hero.biography.publisher}</Text>
      </View>
    </TouchableOpacity>
  );
};