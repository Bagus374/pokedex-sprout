import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../theme/colors'
import { CustomText } from '../base/CustomText'

type StatProps = {
  name: string
  baseStat: number
  percetange: number
}

export const Stat = ({ name, baseStat, percetange }: StatProps) => {
  const statisticName = (name: string): string => {
    switch (name) {
      case 'special-attack':
        return 'Sp. Atk'
      case 'special-defense':
        return 'Sp. Def'
      default:
        return name
    }
  }

  return (
    <View style={styles.stat}>
      <CustomText type='medium' style={styles.title} content={statisticName(name)} />
      <CustomText type='medium' style={styles.statNumber} content={baseStat} />
      <View style={styles.progressWrap}>
        <View style={{
          ...styles.progress,
          backgroundColor: (baseStat < 60) ? colors.red : colors.green,
          width: (baseStat * 100) / percetange + '%'
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    width: 90,
    color: colors.gray,
    textTransform: 'capitalize'
  },
  progressWrap: {
    //width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5
  },
  progress: {
    height: 5,
  },
  statNumber: {
    width: 35,
    textAlign: 'left'
  }
})