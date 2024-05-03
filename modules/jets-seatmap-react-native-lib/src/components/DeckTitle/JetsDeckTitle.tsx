import React, {useContext, useRef} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {JetsContext, LOCALES_MAP, DEFAULT_DECK_TITLE_HEIGHT} from '../../common'

export const JetsDeckTitle = ({number, lang, localeKey}: {number: number; lang: string; localeKey: string}) => {
  const {params, colorTheme} = useContext(JetsContext)
  const elementRef = useRef(null)

  const style = {
    transform: [{scale: params.antiScale}, {translateY: 30}],
    height: DEFAULT_DECK_TITLE_HEIGHT,
  }

  return (
    <View
      ref={elementRef}
      children={
        <Text children={`${LOCALES_MAP[lang][localeKey]}: ${number}`} style={{color: colorTheme.deckLabelTitleColor}} />
      }
      style={[styles.deckTitle, style]}
    />
  )
}

const styles = StyleSheet.create({
  deckTitle: {
    position: 'absolute',
    top: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
