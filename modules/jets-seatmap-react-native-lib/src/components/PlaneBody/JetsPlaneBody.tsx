import React, {useContext, useEffect, useRef, useState} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import Tail from '../../assets/img/tail'
import Nose from '../../assets/img/nose'
import {JetsContext} from '../../common'
import {JetsDeck} from '../Deck/JetsDeck'
import {JetsDeckSeparator} from '../DeckSeparator/JetsDeckSeparator'
import {JetsWing} from '../Wing/JetsWing'

export const JetsPlaneBody = ({
  activeDeck,
  content,
  exits,
  bulks,
  config,
  showOneDeck,
  isSeatMapInited,
}: {
  activeDeck: number
  content: any
  exits: ExitModel[]
  bulks: BulkModel[]
  showOneDeck: boolean | undefined
  config: any
  isSeatMapInited: boolean
}) => {
  const {params, colorTheme} = useContext(JetsContext)

  const [scrollOffset, setScrollOffset] = useState(0)

  const [flatListHeight, setFlatListHeight] = useState(0)

  const {lang, visibleFuselage} = config

  const flatListRef = useRef(null)

  const {deckHeightSpacing, fuselageStrokeWidth, fuselageStrokeColor, floorColor, wingsWidth, fuselageFillColor} =
    colorTheme

  const wingsSpace = params?.visibleWings ? wingsWidth * 2 : 0

  const bodyWidth = (params?.innerWidth || 0) - wingsSpace

  const decksWrapperStyle = {
    borderLeftWidth: fuselageStrokeWidth,
    borderLeftColor: fuselageStrokeColor,
    borderRightWidth: fuselageStrokeWidth,
    borderRightColor: fuselageStrokeColor,
    width: bodyWidth,
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
      <View key={item.uniqId + index} style={[decksWrapperStyle, {alignSelf: 'center'}]}>
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
            flatListHeight={flatListHeight}
            config={config}
          />
        </View>
        {index < content.length - 1 && !showOneDeck && (
          <JetsDeckSeparator key={'separator-' + index} width={params.innerWidth - wingsWidth * 2} />
        )}
        {params?.visibleWings && <JetsWing item={item} />}
      </View>
    ) : null
  }

  const keyExtractor = (item: any) => item.uniqId.toString()

  const handleLayout = (event: any) => {
    const {height, width} = event.nativeEvent.layout
    setFlatListHeight(height)
  }

  return (
    <View style={[styles.planeBody]}>
      <FlatList
        key={activeDeck}
        ref={flatListRef}
        onLayout={handleLayout}
        data={content.length != 0 ? [content[activeDeck]] : []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={activeDeck}
        onScroll={e => setScrollOffset(e.nativeEvent.contentOffset.y)}
        showsVerticalScrollIndicator={true}
        bounces={false}
        ListHeaderComponent={
          visibleFuselage ? (
            <View
              children={
                <Nose
                  width={params?.innerWidth != null ? params.innerWidth : 0}
                  wingsWidth={params?.visibleWings != undefined && params?.visibleWings ? colorTheme?.wingsWidth : 0}
                  storkeWidth={params != undefined ? colorTheme?.fuselageStrokeWidth / (params?.innerWidth / 200) : 0}
                  mainColor={colorTheme?.fuselageFillColor}
                  windowColor={colorTheme?.fuselageWindowsColor}
                  outlineColor={colorTheme?.fuselageStrokeColor}
                />
              }
              style={{width: '100%', alignItems: 'center', top: 10}}
            />
          ) : (
            <></>
          )
        }
        ListFooterComponent={
          visibleFuselage ? (
            <View
              children={
                <Tail
                  width={params?.innerWidth != null ? params.innerWidth : 0}
                  wingsWidth={params?.visibleWings != undefined && params?.visibleWings ? colorTheme?.wingsWidth : 0}
                  storkeWidth={params != undefined ? colorTheme?.fuselageStrokeWidth / (params?.innerWidth / 200) : 0}
                  mainColor={colorTheme?.fuselageFillColor}
                  outlineColor={colorTheme?.fuselageStrokeColor}
                />
              }
              style={{width: '100%', alignItems: 'center', top: -10}}
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
    // backgroundColor: 'red',
  },
})
