import React, {useContext} from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {SvgXml} from 'react-native-svg'
import {JetsContext} from '../../common'

export const JetsDeckSelector = ({activeDeck, onPress}: {activeDeck: number; onPress: () => void}) => {
  const {params, colorTheme, switchDeck} = useContext(JetsContext)

  const {deckSelectorStrokeColor, deckSelectorFillColor, deckSelectorSize} = colorTheme

  const style = {
    backgroundColor: deckSelectorFillColor,
    height: deckSelectorSize,
    width: deckSelectorSize,
    ...(params?.rightToLeft ? {right: 0} : {left: 0}),
  }

  const buttonSVG = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97" >
    <g>
    	<g>
    		<path fill="${deckSelectorStrokeColor}" d="M360.909,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848
    			c13.281,0,24.061-10.767,24.061-24.061V24.061C384.97,10.767,374.191,0,360.909,0z M360.909,360.909H24.061V24.061h336.848
    			V360.909z"/>
    		<path fill="${deckSelectorStrokeColor}" d="M59.935,240.666c0,6.785,5.883,12.151,12.56,11.97h239.92
    			c10.671,0.289,16.602-12.872,8.927-20.476l-120.291-119.1c-4.74-4.692-12.403-4.523-17.191,0L63.664,232.065
    			C61.379,234.242,59.935,237.274,59.935,240.666z M192.461,138.589l91.021,90.119H101.427L192.461,138.589z"/>
    	</g>
    </g>
    </svg>
    `

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      children={
        <View
          children={<SvgXml xml={buttonSVG} width="100%" height="100%" />}
          style={{width: '100%', height: '100%'}}
        />
      }
      style={[styles.deckSelector, style, {transform: activeDeck == 1 ? [{rotate: '180deg'}] : []}]}
    />
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
