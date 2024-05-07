import React, {useContext, useRef, useState} from 'react'
import {View, StyleSheet, ViewStyle} from 'react-native'
import {JetsContext, DEFAULT_DECK_PADDING_SIZE} from '../../common'
import {JetsBulk} from '../Bulk'
import {JetsDeckExit} from '../DeckExit/JetsDeckExit'
import {JetsDeckTitle} from '../DeckTitle/JetsDeckTitle'
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
  scrollOffset,
  flatListHeight,
  config,
}: {
  deck: any
  lang: string
  exits: ExitModel[]
  bulks: BulkModel[]
  isSingleDeck: boolean
  scrollOffset: number
  flatListHeight: number
  config: any
}) => {
  const {rows, number, height, width, wingsInfo} = deck || {}

  const {params} = useContext(JetsContext)

  const tooltipViewModel = useContext(TooltipViewModel)

  const elementRef = useRef(null)

  const [activeTooltip, setActiveTooltip] = useState<{seat: SeatModel} | null>(null)

  const deckStyle: ViewStyle = {
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
        key={item.uniqId}
        children={
          <>
            <JetsRow
              key={item.uniqId}
              seats={item.seats}
              top={item.topOffset}
              onPress={handlePressSeat}
              scrollOffset={scrollOffset}
              flatListHeight={flatListHeight}
              config={config}
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
        key={item.uniqId}
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
      {number && !isSingleDeck && <JetsDeckTitle number={number} lang={lang} localeKey={DECK_LOCALE_KEY} />}

      <View
        children={rows.map((item: RowModel, index: number) => renderItem({item: item, index: index}))}
        style={{zIndex: 3, position: 'absolute', width: width}}
      />

      {exits && exits.length && (
        <View
          children={exits.map((item: ExitModel) => renderExit({item: item}))}
          style={{zIndex: 4, position: 'absolute', width: '100%', justifyContent: 'space-between'}}
        />
      )}

      {bulks != undefined && bulks.length && (
        <View
          children={bulks.map((item: BulkModel) => renderBulk({item: item}))}
          style={{zIndex: 5, position: 'absolute', width: '100%'}}
        />
      )}

      {params?.builtInTooltip && tooltipViewModel?.isActive.state && activeTooltip && (
        <TooltipModal seat={activeTooltip.seat} lang={lang} />
      )}
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
    zIndex: 1,
  },
})
