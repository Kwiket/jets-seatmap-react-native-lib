import React, {useContext, useRef} from 'react';
import {View, ViewStyle} from 'react-native';
import {JetsContext} from '../../common';

export const JetsDeckSeparator = ({width}: {width: number}) => {
  const {colorTheme} = useContext(JetsContext);

  const elementRef = useRef(null);

  const separatorStyle: ViewStyle = {
    height: colorTheme.deckSeparation,
    backgroundColor: colorTheme.fuselageFillColor,
    width: width,
    position: 'relative',
  };

  return <View style={[separatorStyle]} ref={elementRef} />;
};
