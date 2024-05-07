import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import Svg, {Path, G, SvgUri} from 'react-native-svg';
import {DEFAULT_STYLE_POSITION, JetsContext} from '../../common';

export const JetsDeckExit = ({type, topOffset}: {type: string; topOffset: number}) => {
  const {colorTheme} = useContext(JetsContext);

  const {exitIconUrlLeft, exitIconUrlRight, exitIconWidth, exitIconHeight} = colorTheme;

  const isBuiltInIcons = !exitIconUrlLeft || !exitIconUrlRight;

  const xOffset = 0;

  const ArrowSvg = ({direction}: {direction: string}) => (
    <Svg width="72" height="72" viewBox="0 0 114 114">
      <G transform="translate(0,114) scale(0.1,-0.1)" fill="#d00434">
        {direction === 'left' ? (
          <Path d="M635 922 c-115 -85 -269 -198 -341 -251 l-132 -96 344 -252 344 -252 0 129 0 129 95 -54 95 -54 0 354 0 354 -95 -54 -94 -53 -3 127 -3 127 -210 -154z" />
        ) : (
          <Path d="M290 950 l0 -129 -95 54 -95 54 0 -354 0 -354 95 54 95 54 0 -129 0 -129 344 252 c334 245 343 252 322 268 -11 9 -166 122 -343 252 l-323 236 0 -129z" />
        )}
      </G>
    </Svg>
  );

  return (
    <View
      children={
        <>
          {isBuiltInIcons ? (
            <ArrowSvg direction={type} />
          ) : (
            <View
              children={
                <SvgUri
                  width={exitIconWidth}
                  height={exitIconHeight}
                  uri={type === 'left' ? exitIconUrlLeft : exitIconUrlRight}
                />
              }
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            />
          )}
        </>
      }
      style={{
        position: 'absolute',
        top: topOffset,
        left: type === 'left' ? xOffset : DEFAULT_STYLE_POSITION,
        right: type === 'right' ? xOffset : DEFAULT_STYLE_POSITION,
        width: 72,
        height: 72,
      }}
    />
  );
};
