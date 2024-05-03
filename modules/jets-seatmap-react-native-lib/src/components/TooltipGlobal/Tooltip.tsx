import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {SvgXml} from 'react-native-svg'
import {DEFAULT_SEAT_PASSENGER_TYPES, JetsContext, LOCALES_MAP} from '../../common'
import {JetsButton} from '../Button/JetsButton'
import {TooltipViewModel} from './TooltipViewModel'

const TooltipModal = ({seat, lang}: {seat: SeatModel; lang: string}) => {
  const viewModel = useContext(TooltipViewModel)

  const {colorTheme, params, onSeatSelect, onSeatUnselect, isSeatSelectDisabled} = useContext(JetsContext)

  const {
    tooltipBackgroundColor,
    tooltipHeaderColor,
    tooltipBorderColor,
    tooltipFontColor,
    tooltipIconColor,
    tooltipIconBorderColor,
    tooltipIconBackgroundColor,
    tooltipSelectButtonTextColor,
    tooltipSelectButtonBackgroundColor,
    tooltipCancelButtonTextColor,
    tooltipCancelButtonBackgroundColor,
  } = colorTheme

  const CANCEL_BTN_KEY = 'cancel'
  const SELECT_BTN_KEY = 'select'
  const UNSELECT_BTN_KEY = 'unselect'
  const PASSENGER_KEY = 'passenger'
  const RESTRICTION_KEY = 'seatRestrictions'

  const [viewHeight, setViewHeight] = useState(0)

  const onLayout = (event: any) => {
    const {height} = event.nativeEvent.layout
    setViewHeight(height)
  }

  const tooltipWidth = (Dimensions.get('screen').width - 10) / params.scale

  let restrictionsLabel = ''
  if (seat.passengerTypes) {
    const existingRestrictions = DEFAULT_SEAT_PASSENGER_TYPES
    const filteredPassengerTypes = seat.passengerTypes.filter(type => existingRestrictions.includes(type))
    let typeStrings = filteredPassengerTypes.map(type => LOCALES_MAP[lang][type])
    const isRestrictionApplied = filteredPassengerTypes.length < existingRestrictions.length
    restrictionsLabel = isRestrictionApplied ? `${LOCALES_MAP[lang][RESTRICTION_KEY]}: ${typeStrings.join(', ')}` : ''
  }

  let passengerLabel = ''
  if (seat.passenger) {
    passengerLabel = seat.passenger?.passengerLabel || `${LOCALES_MAP['EN'][PASSENGER_KEY]} ${seat.passenger?.id}`
  }

  return (
    <View
      onLayout={onLayout}
      style={[
        styles.tooltip,
        {
          top:
            viewModel?.topOffset.state != undefined
              ? viewModel.position.state == 'top'
                ? viewModel?.topOffset.state + 150
                : viewModel?.topOffset.state - viewHeight - 40
              : 0,
          width: tooltipWidth,
          backgroundColor: tooltipBackgroundColor,
          borderColor: tooltipBorderColor,
          borderWidth: 2,
        },
      ]}>
      <View
        style={[
          styles.triangle,
          {
            top:
              viewModel?.topOffset.state != undefined ? (viewModel.position.state == 'top' ? -50 : viewHeight - 10) : 0,
            left: viewModel?.xOffset.state != undefined ? viewModel.xOffset.state : 0,
            borderColor: tooltipBackgroundColor,
            transform: [{scaleY: viewModel?.position.state == 'bottom' ? -1 : 1}],
          },
        ]}
      />
      <View
        children={
          <>
            <Text style={[styles.title, {color: tooltipHeaderColor}]}>{`${seat.classType || seat.rowName} ${
              seat.number
            }`}</Text>
            <Text style={[styles.title, {color: tooltipHeaderColor}]}>{`${seat.price}`}</Text>
          </>
        }
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
      />

      <Text style={[styles.title, {color: tooltipHeaderColor}]}>{`${
        seat?.passenger?.passengerLabel != undefined ? passengerLabel : restrictionsLabel
      }`}</Text>

      {seat.features != undefined &&
        seat.features.map((item: any) => (
          <View
            key={item.uniqId}
            children={
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'flex-start',
                  paddingVertical: 20,
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  left: 0,
                }}
                children={
                  <>
                    {item.icon ? (
                      <SvgXml xml={item.icon} width={45} height={45} />
                    ) : (
                      <Text
                        children={item.title}
                        style={{fontSize: 45, textAlign: 'left', marginLeft: 10, color: tooltipFontColor}}
                      />
                    )}

                    <Text
                      children={item.value}
                      style={{fontSize: 45, textAlign: 'left', marginLeft: 10, color: tooltipFontColor}}
                    />
                  </>
                }
              />
            }
          />
        ))}

      {seat.additionalProps != undefined &&
        seat.additionalProps.map((item: any) => (
          <View
            key={item.uniqId}
            children={
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'flex-start',
                  paddingVertical: 20,
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  left: 0,
                }}
                children={
                  <>
                    {item.icon ? (
                      <SvgXml xml={item.icon} width={45} height={45} />
                    ) : (
                      <Text
                        children={item.title}
                        style={{fontSize: 45, textAlign: 'left', marginLeft: 10, color: tooltipFontColor}}
                      />
                    )}

                    <Text
                      children={item.value}
                      style={{fontSize: 45, textAlign: 'left', marginLeft: 10, color: tooltipFontColor}}
                    />
                  </>
                }
              />
            }
          />
        ))}

      <View
        children={
          seat.measurements != undefined ? (
            seat.measurements.map((item: any) => (
              <View
                key={item.uniqId}
                children={
                  <>
                    <SvgXml xml={item.icon} width={100} height={100} fill={tooltipIconColor} />
                    <Text children={item.title} style={{fontSize: 45, color: tooltipFontColor}} />
                    <Text children={item.value} style={{fontSize: 45, color: tooltipFontColor}} />
                  </>
                }
                style={{
                  borderWidth: 2,
                  borderColor: tooltipIconBorderColor,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  width: '30%',
                  paddingVertical: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            ))
          ) : (
            <></>
          )
        }
        style={{
          flexDirection: 'row',
          paddingTop: 40,
          paddingHorizontal: 5,
          justifyContent: 'space-between',
        }}
      />
      <View
        children={
          <>
            <JetsButton
              content={LOCALES_MAP['EN'][CANCEL_BTN_KEY]}
              foregroundColor={{color: tooltipCancelButtonTextColor}}
              style={{
                backgroundColor: tooltipCancelButtonBackgroundColor,
                marginRight: 15,
              }}
              onClick={() => viewModel?.isActive.setState(false)}
            />
            {seat.passenger ? (
              <JetsButton
                onClick={() => {
                  onSeatUnselect(seat)
                  viewModel?.isActive.setState(false)
                }}
                content={LOCALES_MAP[lang][UNSELECT_BTN_KEY]}
                disabled={seat.passenger.readonly}
                foregroundColor={{color: tooltipSelectButtonTextColor}}
                style={{
                  backgroundColor: tooltipSelectButtonBackgroundColor,
                  marginLeft: 15,
                }}
              />
            ) : (
              <JetsButton
                onClick={() => {
                  onSeatSelect(seat)
                  viewModel?.isActive.setState(false)
                }}
                content={LOCALES_MAP[lang][SELECT_BTN_KEY]}
                disabled={isSeatSelectDisabled(seat)}
                foregroundColor={{color: tooltipSelectButtonTextColor}}
                style={{
                  backgroundColor: tooltipSelectButtonBackgroundColor,
                  marginLeft: 15,
                }}
              />
            )}
          </>
        }
        style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20, paddingTop: 40}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 2000,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 55,
    paddingTop: 30,
    fontWeight: 'bold',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    position: 'absolute',
    left: 0,
  },
})

export default TooltipModal
