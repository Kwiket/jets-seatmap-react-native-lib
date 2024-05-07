import {useContext} from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {JetsContext} from '../../common';
import {BULK_TEMPLATE_MAP, STICKER_TEMPLATE_MAP} from './constants';

export const JetsBulk = ({item}: {item: BulkModel}) => {
  const {params, colorTheme} = useContext(JetsContext);

  const {bulkBaseColor, bulkCutColor, bulkIconColor} = colorTheme;

  const bulkScaleCoff = 0.7;

  let coloredBulkSVG = BULK_TEMPLATE_MAP.get(item.id);

  let coloredStickerSVG = STICKER_TEMPLATE_MAP.get(item.iconType ? item.iconType.toLowerCase().trim() : '');

  coloredStickerSVG = coloredStickerSVG?.replace('$stickerColor', bulkIconColor);

  coloredBulkSVG = coloredBulkSVG?.replace('$baseColor', bulkBaseColor);

  coloredBulkSVG = coloredBulkSVG?.replace('$cutColor', bulkCutColor);

  return (
    <View
      children={
        <>
          {coloredBulkSVG != undefined && <SvgXml xml={coloredBulkSVG} width="100%" height="100%" />}
          {coloredStickerSVG != undefined && (
            <View
              children={
                <View
                  children={
                    <SvgXml xml={coloredStickerSVG} width={Math.abs((item.height / 2) * 0.5)} height={'100%'} />
                  }
                  style={{
                    transform: [{translateY: -50}],
                  }}
                />
              }
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: item.height * 0.7,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          )}
        </>
      }
      style={[
        {
          height: item.height * bulkScaleCoff,
          width: item.width * bulkScaleCoff,
          top: item.topOffset,
          alignSelf: item.type == 'center' ? 'center' : item.type == 'left' ? 'flex-start' : 'flex-end',
          transform: item.type == 'right' ? [{scaleX: -1}] : [],
          zIndex: 1,
        },
      ]}
    />
  );
};
