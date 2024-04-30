import React, {useContext, useRef} from 'react'
import {View, StyleSheet} from 'react-native'
import {JetsContext} from '../../common'

export const JetsWing = ({wingsInfo}) => {
  const {params, colorTheme} = useContext(JetsContext)
  const elementRef = useRef(null)

  const containerStyle = {
    top: wingsInfo.start,
    height: wingsInfo.length,
    width: params.innerWidth,
    position: 'absolute',
    overflow: 'hidden',
  }

  const wingStyle = {
    backgroundColor: colorTheme?.fuselageWingsColor,
    width: '100%',
    height: '100%',
    position: 'absolute',
  }

  return (
    <View style={[styles.wings, containerStyle]} ref={elementRef}>
      <View style={wingStyle}></View>
      <View style={wingStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  wings: {
    position: 'absolute',
  },
})
