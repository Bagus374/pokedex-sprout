import React, { useCallback } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Type } from '../../types/pokemon';
import { Pokeball } from '../Pokeball';

import DotsIcon from '../../assets/dots.svg'
import LeftArrowIcon from '../../assets/left-arrow.svg'
import { CustomText } from '../base/CustomText';

type Props = {
  backgroundColor: string,
  picture: string
  name: string
  id: string,
  types: Type[] | undefined
}

export const Header = ({ backgroundColor, picture, name, id, types }: Props) => {
  const { goBack } = useNavigation()

  const addZeros = useCallback(
    (id: string) => {
      return id.padStart(3, '0')
    },
    [],
  )

  return (
    <View style={{ ...styles.container, backgroundColor }}>

      <View style={styles.cta}>
        <TouchableOpacity style={{ width: 30, height: 30, }} onPress={goBack}>
          <LeftArrowIcon width={30} height={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapPicture}>
        <DotsIcon style={styles.dotsIcon} />
        <Pokeball size={230} style={{ top: 0, right: -45 }} />
        <Image source={{ uri: picture, }} style={styles.picture} />
      </View>

      <View style={styles.wrapText}>
        <CustomText type='bold' style={styles.title} content={name} />
        <CustomText type='bold' style={styles.id} content={`#` + addZeros(id)} />
      </View>

      <View style={styles.wrapTypes}>
        {types?.map(type => (
          <CustomText key={type.slot} type='bold' style={styles.badge} content={type.type.name} />
        ))}
      </View>

      <View style={styles.tabBg} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 430,
    position: 'relative',
  },
  dotsIcon: {
    position: 'absolute',
    top: 30,
    left: 55,
    opacity: 0.35,
    width: '100%',
    height: 20,
  },
  square: {
    position: 'absolute',
    top: -30,
    left: -50,
    width: 150,
    height: 150,
    transform: [{ rotate: '60deg' }],
    backgroundColor: 'rgba(255,255,255,.15)',
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  wrapPicture: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
    width: '100%',
    zIndex: 1
  },
  picture: {
    width: 250,
    height: 250
  },
  wrapText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 5
  },
  title: {
    color: '#ffffff',
    fontSize: 35,
    textTransform: 'capitalize'
  },
  wrapTypes: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10
  },
  badge: {
    fontSize: 12,
    color: '#ffffff',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(255,255,255,.15)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 15
  },
  id: {
    color: '#ffffff',
    fontSize: 18
  },
  tabBg: {
    position: 'absolute',
    width: '100%',
    height: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    bottom: -5,
  }
})