import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import HeroDetailCard from '../components/HeroDetailCard';
import styles from '../styles/DetailScreen.styles';
import { BASE_URL } from '../config/api';

export default function DetailScreen({ route }) {
  const { heroId } = route.params;
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/${heroId}`)
      .then(res => res.json())
      .then(data => setHero(data))
      .finally(() => setLoading(false));
  }, [heroId]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <HeroDetailCard hero={hero} />;
}