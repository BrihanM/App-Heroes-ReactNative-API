import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import HeroListItem from '../components/HeroListItem';
import styles from '../styles/ListScreen.styles';
import { BASE_URL } from '../config/api';

const TOTAL_HEROES = 731;
const PAGE_SIZE = 20;

export default function ListScreen({ navigation }) {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadPage = useCallback(async (pageNumber) => {
    setLoading(true);
    const startId = (pageNumber - 1) * PAGE_SIZE + 1;
    const endId = Math.min(pageNumber * PAGE_SIZE, TOTAL_HEROES);
    const ids = Array.from({ length: endId - startId + 1 }, (_, i) => startId + i);
    try {
      const results = await Promise.all(
        ids.map(id => fetch(`${BASE_URL}/${id}`).then(res => res.json()))
      );
      setHeroes(prev => (pageNumber === 1 ? results : [...prev, ...results]));
    } catch (error) {
      console.error('Error fetching heroes:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage(1);
  }, [loadPage]);

  const handleEndReached = () => {
    const nextPage = page + 1;
    const maxPage = Math.ceil(TOTAL_HEROES / PAGE_SIZE);
    if (nextPage <= maxPage && !loading) {
      setPage(nextPage);
      loadPage(nextPage);
    }
  };

  const handlePress = hero => navigation.navigate('Detail', { heroId: hero.id });

  if (!heroes.length && loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={heroes}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <HeroListItem hero={item} onPress={handlePress} />}
      numColumns={5}
      columnWrapperStyle={styles.row}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
    />
  );
};