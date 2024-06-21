import React, { useContext } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import { Store } from '../../context/store';
import { Stat } from './Stat';

export const StatsTab = () => {
  const { state } = useContext(Store)
  const stats = state.pokemon.stats

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          stats.map(({ stat, base_stat }) => (
            <Stat
              key={stat.name}
              name={stat.name}
              baseStat={base_stat}
              percetange={150}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25
  }
})