import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Pokeball } from './Pokeball'
import { Type } from '../types/pokemon'
import { CustomText } from './base/CustomText'

type Props = {
  id: string
  name: string
  types: Type[] | undefined
  children?: React.ReactNode
  color?: string
  backgroundColor?: string,
  pokeballColor?: 'white' | 'gray'
}

const DEFAULT_COLOR = '#9e9e9e'
const DEFAULT_BACKGROUND = '#f5f5f5'
const WIDTH = Dimensions.get('window').width

const BuildCard = ({
  name, types, children,
  pokeballColor,
  color = DEFAULT_COLOR,
  backgroundColor = DEFAULT_BACKGROUND
}: Props) => {
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      {children}
      <View style={styles.pokeballWrap}>
        <Pokeball color={pokeballColor} size={120} style={{ top: 20, right: -10 }} />
      </View>
      <CustomText type='bold' style={{ ...styles.text, color }} content={name} />
      <View style={styles.wrapTypes}>
        {types?.map(type => (
          <CustomText key={type.slot} type='medium' style={{ ...styles.badge, color }} content={type.type.name} />
        ))}
      </View>
    </View>
  )
}

export const Card = React.memo(BuildCard)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    position: 'relative',
    width: (WIDTH * 0.5) - 20,
    height: 120,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 16,
    zIndex: 2,
    width: '100%'
  },
  pokeballWrap: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 0,
    right: 0,
    borderRadius: 10
  },
  wrapTypes: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: 5
  },
  badge: {
    fontSize: 9,
    textTransform: 'capitalize',
    backgroundColor: 'rgba(0,0,0,.1)',
    marginTop: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: 'auto'
  }
})