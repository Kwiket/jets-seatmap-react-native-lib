import React, {useContext, useRef} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {JetsContext} from '../../common';

export const JetsDeckSeparator = ({width}: {width: number}) => {
  const {colorTheme} = useContext(JetsContext);

  const elementRef = useRef(null);

  const separatorStyle: ViewStyle = {
    height: colorTheme.deckSeparation,
    backgroundColor: colorTheme.fuselageFillColor,
    width: '100%',
    position: 'relative',
  };

  return <View style={[separatorStyle]} ref={elementRef} />;
};
