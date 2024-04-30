import {useContext} from 'react'
import {View} from 'react-native'
import {SvgXml} from 'react-native-svg'
import {JetsContext} from '../../common'
import {BULK_TEMPLATE_MAP, STICKER_TEMPLATE_MAP} from './constants'

export const JetsBulk = ({item}: {item: any}) => {
  const {params, colorTheme} = useContext(JetsContext)
  const {bulkBaseColor, bulkCutColor, bulkIconColor} = colorTheme

  const bulkScaleCoff = 0.7

  let coloredBulkSVG = BULK_TEMPLATE_MAP.get(item.id)
  let coloredStickerSVG = STICKER_TEMPLATE_MAP.get(item.iconType ? item.iconType.toLowerCase().trim() : '')

  coloredStickerSVG = coloredStickerSVG?.replace('$stickerColor', bulkIconColor)
  coloredBulkSVG = coloredBulkSVG?.replace('$baseColor', bulkBaseColor)
  coloredBulkSVG = coloredBulkSVG?.replace('$cutColor', bulkCutColor)

  return (
    <View
      children={
        <>
          {coloredBulkSVG != undefined && <SvgXml xml={coloredBulkSVG} width="100%" height="100%" />}
          {coloredStickerSVG != undefined && (
            <SvgXml
              xml={coloredStickerSVG}
              width="100%"
              height={(item.height / 2) * 0.7 * params.antiScale - item.height}
              style={{position: 'absolute', top: '20%'}}
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
  )
}
