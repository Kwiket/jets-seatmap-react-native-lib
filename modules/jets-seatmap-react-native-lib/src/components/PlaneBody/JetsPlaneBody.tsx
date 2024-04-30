import React, {useContext, useState} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import Tail from '../../assets/img/tail'
import Nose from '../../assets/img/nose'
import {JetsContext} from '../../common'
import {JetsDeck} from '../Deck/JetsDeck'
import {JetsDeckSeparator} from '../DeckSeparator/JetsDeckSeparator'

export const JetsPlaneBody = ({
  activeDeck,
  content,
  exits,
  bulks,
  config,
  showOneDeck,
}: {
  activeDeck: number
  content: any
  exits: ExitModel[]
  bulks: BulkModel[]
  showOneDeck: boolean
  config: any
}) => {
  const {params, colorTheme} = useContext(JetsContext)

  const [scrollOffset, setScrollOffset] = useState(0)

  const {lang, visibleFuselage} = config
  const {deckHeightSpacing, fuselageStrokeWidth, fuselageStrokeColor, floorColor, wingsWidth, fuselageFillColor} =
    colorTheme

  const decksWrapperStyle = {
    borderLeftWidth: fuselageStrokeWidth,
    borderLeftColor: fuselageStrokeColor,
    borderRightWidth: fuselageStrokeWidth,
    borderRightColor: fuselageStrokeColor,
  }

  const deckFloorStyle = {
    backgroundColor: floorColor,
    paddingVertical: deckHeightSpacing,
    borderLeftColor: fuselageFillColor,
    borderRightColor: fuselageFillColor,
  }

  const renderItem = ({item, index}: {item: DeckModel; index: number}) => {
    const deckToShow = config?.horizontal && !config?.rightToLeft ? content.length - 1 - index : index

    return !showOneDeck || index === deckToShow ? (
      <View key={item.uniqId + index} style={decksWrapperStyle}>
        <View
          style={[
            deckFloorStyle,
            {
              height: item.height + deckHeightSpacing,
              borderWidth: Math.max((params.innerWidth - item.width) * 0.5 - fuselageStrokeWidth, fuselageStrokeWidth),
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
          ]}>
          <JetsDeck
            deck={item}
            lang={lang}
            exits={exits[item.number - 1]}
            bulks={bulks[item.number - 1]}
            scrollOffset={scrollOffset}
            isSingleDeck={content.length === 1}
          />
        </View>
        {index < content.length - 1 && !showOneDeck && (
          <JetsDeckSeparator key={'separator-' + index} width={params.innerWidth - wingsWidth * 2} />
        )}
      </View>
    ) : null
  }

  const keyExtractor = (item: any) => item.uniqId.toString()
  const wingsSpace = params?.visibleWings ? wingsWidth * 2 : 0
  const bodyWidth = (params?.innerWidth || 0) - wingsSpace

  const bodyStyle = {
    width: bodyWidth || config.width,
  }

  return (
    <View style={[styles.planeBody, bodyStyle]}>
      <FlatList
        data={content.length != 0 ? [content[activeDeck]] : []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={activeDeck}
        onScroll={e => setScrollOffset(e.nativeEvent.contentOffset.y)}
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          !visibleFuselage ? (
            <View
              children={
                <Nose
                  mainColor={colorTheme?.fuselageFillColor}
                  windowColor={colorTheme?.fuselageWindowsColor}
                  outlineColor={colorTheme?.fuselageStrokeColor}
                />
              }
              style={{width: '100%', alignItems: 'center'}}
            />
          ) : (
            <></>
          )
        }
        ListFooterComponent={
          !visibleFuselage ? (
            <View
              children={
                <Tail mainColor={colorTheme?.fuselageFillColor} outlineColor={colorTheme?.fuselageStrokeColor} />
              }
              style={{width: '100%', alignItems: 'center'}}
            />
          ) : (
            <></>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  planeBody: {
    marginHorizontal: 'auto',
  },
})
