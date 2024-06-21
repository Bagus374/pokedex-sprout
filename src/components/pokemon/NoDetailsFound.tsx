import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CustomText } from '../base/CustomText'

export const NoDetailsFound = ({ message }: { message: string }) => (
  <View style={styles.notFound}>
    <CustomText type='bold' style={styles.textNotFound} content={message} />
    <Image
      style={styles.imgNotFound}
      source={require('../../assets/pokeball.png')}
    />
  </View>
)

const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    alignItems: 'center',
  },
  textNotFound: {
    fontSize: 22,
    color: '#bdbdbd',
    marginVertical: 20
  },
  imgNotFound: {
    width: 150,
    height: 150,
    opacity: .2
  }
})
