import React, {useContext} from 'react';
import {View} from 'react-native';
import {JetsContext} from '../../common';

export const JetsWing = ({item}: {item: {wingsInfo: {start: number; finish: number}}}) => {
  const {params, colorTheme} = useContext(JetsContext);

  return (
    <View
      style={{
        position: 'absolute',
        height: item.wingsInfo.finish - item.wingsInfo.start,
        width: 1000000,
        top: item.wingsInfo.start,
        left: -10000,
        backgroundColor: colorTheme.fuselageWingsColor,
        zIndex: -1,
      }}
    />
  );
};
