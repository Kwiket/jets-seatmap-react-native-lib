import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {SvgXml} from 'react-native-svg'
import {JetsContext, LOCALES_MAP} from '../../common'
import {JetsButton} from '../Button/JetsButton'
import {TooltipViewModel} from './TooltipViewModel'

const TooltipModal = ({seat}: {seat: SeatModel}) => {
  const viewModel = useContext(TooltipViewModel)

  const {colorTheme, params} = useContext(JetsContext)

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
          backgroundColor: tooltipBackgroundColor,
          borderColor: tooltipBorderColor,
          borderWidth: 2,
        },
      ]}>
      <View
        style={[
          styles.triangle,
          {
            top: viewModel?.topOffset.state != undefined ? (viewModel.position.state == 'top' ? -50 : viewHeight) : 0,
            left: viewModel?.xOffset.state != undefined ? viewModel.xOffset.state : 0,
            borderColor: tooltipBackgroundColor,
            transform: [{scaleY: viewModel?.position.state == 'bottom' ? -1 : 1}],
          },
        ]}
      />
      <Text style={[styles.title, {color: tooltipHeaderColor}]}>{`Economy ${seat.number}`}</Text>
      {seat.features != undefined &&
        seat.features.map(item => (
          <View
            key={item.uniqId}
            children={
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'flex-start',
                  paddingVertical: 10,
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
            seat.measurements.map(item => (
              <View
                key={item.uniqId}
                children={
                  <>
                    <SvgXml xml={item.icon} width={100} height={100} fill={tooltipFontColor} />
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
        style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingTop: 40}}
      />
      <View
        children={
          <>
            <JetsButton
              content={LOCALES_MAP['EN'][CANCEL_BTN_KEY]}
              style={{color: tooltipCancelButtonTextColor, backgroundColor: tooltipCancelButtonBackgroundColor}}
              onClick={() => viewModel?.isActive.setState(false)}
            />
            <JetsButton
              content={LOCALES_MAP['EN'][SELECT_BTN_KEY]}
              className="jets-btn jets-tooltip--btn "
              disabled={true}
              style={{
                color: tooltipSelectButtonTextColor,
                backgroundColor: tooltipSelectButtonBackgroundColor,
              }}
            />
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
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 2000,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 55,
    paddingVertical: 20,
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
