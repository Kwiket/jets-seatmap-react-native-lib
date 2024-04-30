import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {JetsContext} from '../../common'

export const JetsNoData = () => {
  const {params} = useContext(JetsContext)

  const containerStyle = {
    transform: [{scale: params?.antiScale || 1}],
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>Seat map is not found for the flight</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
