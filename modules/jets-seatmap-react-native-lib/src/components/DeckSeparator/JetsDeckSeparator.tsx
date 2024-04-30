import React, {useContext, useRef} from 'react'
import {View, StyleSheet} from 'react-native'
import {JetsContext} from '../../common'

export const JetsDeckSeparator = ({width}: {width: number}) => {
  const {colorTheme} = useContext(JetsContext)
  const elementRef = useRef(null)

  const separatorStyle = {
    height: colorTheme.deckSeparation,
    backgroundColor: colorTheme.fuselageFillColor,
    width: '100%',
  }

  return <View style={[styles.deckSeparator, separatorStyle]} ref={elementRef} />
}

const styles = StyleSheet.create({
  deckSeparator: {
    position: 'relative',
  },
})
