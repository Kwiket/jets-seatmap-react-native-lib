import React, {useContext, useRef, useState} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {JetsContext, DEFAULT_DECK_PADDING_SIZE} from '../../common'
import {JetsBulk} from '../Bulk'
import {JetsDeckExit} from '../DeckExit/JetsDeckExit'
import {JetsDeckTitle} from '../DeckTitle/JetsDeckTitle'
import {JetsWing} from '../Wing'
import {JetsRow} from '../JetsRow/JetsRow'
import TooltipModal from '../TooltipGlobal/Tooltip'
import {TooltipViewModel} from '../TooltipGlobal/TooltipViewModel'

const DECK_LOCALE_KEY = 'deck'

export const JetsDeck = ({
  deck,
  lang,
  exits,
  bulks,
  isSingleDeck,
}: {
  deck: any
  lang: string
  exits: ExitModel[]
  bulks: BulkModel[]
  isSingleDeck: boolean
}) => {
  const {rows, number, height, width, wingsInfo} = deck || {}
  const {params} = useContext(JetsContext)

  const tooltipViewModel = useContext(TooltipViewModel)

  const elementRef = useRef(null)

  const [activeTooltip, setActiveTooltip] = useState(null)

  const [scrollOffset, setScrollOffset] = useState(0)

  const deckStyle = {
    height,
    paddingHorizontal: DEFAULT_DECK_PADDING_SIZE,
    transform: params?.isHorizontal && !params.rightToLeft ? [{rotate: '180deg'}] : [],
    marginHorizontal: 'auto',
  }
  const handlePressSeat = (seat: SeatModel) => {
    setActiveTooltip({
      seat,
    })
  }

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        children={
          <>
            <JetsRow
              key={item.uniqId}
              seats={item.seats}
              top={item.topOffset}
              onPress={handlePressSeat}
              scrollOffset={scrollOffset}
            />
          </>
        }
        style={{top: item.topOffset, position: 'absolute', width: '100%', alignItems: 'center'}}
      />
    )
  }

  const renderExit = ({item, index}: {item: any; index: number}) => (
    <JetsDeckExit key={item.uniqId} type={item.type} topOffset={item.topOffset} />
  )

  const renderBulk = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        children={
          <>
            <JetsBulk item={item} />
          </>
        }
        style={{position: 'absolute', width: '100%', alignItems: 'center', zIndex: 3}}
      />
    )
  }

  return (
    <View style={[styles.deck, deckStyle]} ref={elementRef}>
      {params?.visibleWings && <JetsWing wingsInfo={wingsInfo} />}

      {number && !isSingleDeck && <JetsDeckTitle number={number} lang={lang} localeKey={DECK_LOCALE_KEY} />}

      <FlatList
        data={rows}
        renderItem={renderItem}
        keyExtractor={item => item.uniqId}
        horizontal={false}
        onScroll={e => setScrollOffset(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
        style={{zIndex: 1, position: 'absolute', width: '100%', height: '100%'}}
      />

      {exits && exits.length && (
        <FlatList
          data={exits}
          renderItem={renderExit}
          keyExtractor={item => item.uniqId.toString()}
          horizontal={false}
          style={{zIndex: 2, position: 'absolute', width: '100%', justifyContent: 'space-between'}}
        />
      )}

      {bulks != undefined && bulks.length && (
        <FlatList
          data={bulks}
          renderItem={renderBulk}
          keyExtractor={item => item.uniqId.toString()}
          horizontal={false}
          style={{position: 'absolute', width: '100%', height: '100%'}}
        />
      )}
      {tooltipViewModel.isActive.state && activeTooltip && <TooltipModal seat={activeTooltip.seat} />}
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },
})
