import React, {useContext, useRef} from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {JetsContext, LOCALES_MAP, DEFAULT_DECK_TITLE_HEIGHT} from '../../common';

export const JetsDeckTitle = ({number, lang, localeKey}: {number: number; lang: string; localeKey: string}) => {
  const {params, colorTheme} = useContext(JetsContext);

  const elementRef = useRef(null);

  const style: ViewStyle = {
    transform: [{scale: params.antiScale}, {translateY: 30}],
    height: DEFAULT_DECK_TITLE_HEIGHT,
    position: 'absolute',
    top: 0,
  };

  return (
    <View
      ref={elementRef}
      children={
        <Text
          children={`${LOCALES_MAP[lang][localeKey]}: ${number}`}
          style={[
            {
              color: colorTheme.deckLabelTitleColor,
              fontSize: 14,
              fontWeight: 'bold',
              fontFamily: colorTheme.fontFamily,
            },
          ]}
        />
      }
      style={[style]}
    />
  );
};
