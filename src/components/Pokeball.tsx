import React from 'react'
import { Image, StyleProp, StyleSheet } from 'react-native';

type Props = {
  color?: 'white' | 'gray'
  size?: number
  position?: number
  style?: StyleProp<any>
}

export const Pokeball = ({ color = 'white', size = 300, position = -80, style = {} }: Props) => {
  const pokeballWhite = require('../assets/pokeball-white.png')
  const pokeballGray = require('../assets/pokeball.png')
  const pokeballSelected = color === 'white' ? pokeballWhite : pokeballGray

  return (
    <Image source={pokeballSelected} style={styles(size, position, style).img} />
  )
}

const styles = (size: number, position: number, style: StyleProp<any>) => StyleSheet.create({
  img: {
    position: 'absolute',
    width: size,
    height: size,
    opacity: 0.15,
    ...style
  },
})