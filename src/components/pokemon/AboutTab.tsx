import React, { useContext } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { Store } from '../../context/store';
import { NoDetailsFound } from './NoDetailsFound';
import { calculateHeight, calculateweight } from '../../utils/convertUnits';
import { colors } from '../../theme/colors';
import { CustomText } from '../base/CustomText';

export const AboutTab = () => {
  const { state } = useContext(Store)
  const about = state.pokemon.about

  if (!about) {
    return (
      <NoDetailsFound
        message='No information was found about this pokemon.'
      />
    )
  }

  const { feet, cm } = calculateHeight(about.height)
  const { lbs, kg } = calculateweight(about.weight)
  const abilities = about.abilities.map(({ ability }) => ability.name).join(', ')
  const eggGroups = about.egg_groups.map(({ name }) => name).join(', ')

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <CustomText type='medium' style={styles.label} content='Species' />
          <CustomText type='medium' style={styles.value} content={eggGroups} />
        </View>
        <View style={styles.wrapper}>
          <CustomText type='medium' style={styles.label} content='Height' />
          <CustomText type='medium' content={feet + ' ' + cm} />
        </View>
        <View style={styles.wrapper}>
          <CustomText type='medium' style={styles.label} content='Weight' />
          <CustomText type='medium' content={lbs + ' ' + kg} />
        </View>
        <View style={styles.wrapper}>
          <CustomText type='medium' style={styles.label} content='Abilities' />
          <CustomText type='medium' style={styles.value} content={abilities} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25
  },
  falvorText: {
    marginBottom: 20
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    minWidth: 110,
    color: colors.gray
  },
  value: {
    textTransform: 'capitalize',
    flexShrink: 1
  }
})