import React, {useContext} from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {JetsContext} from '../../common'

export const JetsDeckSelector = ({onPress}: {onPress: () => void}) => {
  const {params, colorTheme} = useContext(JetsContext)

  const {deckSelectorStrokeColor, deckSelectorFillColor, deckSelectorSize} = colorTheme

  const style = {
    backgroundColor: deckSelectorFillColor,
    height: deckSelectorSize,
    width: deckSelectorSize,
    ...(params?.rightToLeft ? {right: 0} : {left: 0}),
  }

  return (
    <TouchableOpacity style={[styles.deckSelector, style]} onPress={() => onPress()}>
      <View style={{width: '100%', height: '100%'}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deckSelector: {
    position: 'absolute',
    padding: 5,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    zIndex: 2500,
  },
})
