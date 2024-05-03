import React, {useContext, useState, useRef, useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {SvgXml} from 'react-native-svg'
import {JetsContext} from '../../common'
import {seatTemplateService} from '../Seat'
import {TooltipViewModel} from '../TooltipGlobal/TooltipViewModel'
import {getContainerStyleByNumber, getSeatRotationStyle, getStyleByNumber} from './SeatTypes'

export const JetsRow = ({
  seats,
  top,
  onPress,
  scrollOffset,
  flatListHeight,
}: {
  seats: SeatModel[]
  top: number
  onPress: (seat: SeatModel) => void
  scrollOffset: number
  flatListHeight: number
}) => {
  const tooltipViewModel = useContext(TooltipViewModel)
  const {params, colorTheme, onTooltipRequested} = useContext(JetsContext)

  const seatMeasurements = useRef({})

  const onSeatLayout = (event: any, seatId: any) => {
    event.target.measureInWindow((x: number, y: number, width: number, height: number) => {
      seatMeasurements.current[seatId] = {x, y, width, height}
    })
  }

  const handlePress = (seat: SeatModel) => {
    const {x, y, width, height} = seatMeasurements.current[seat.uniqId]
    const pageX = x

    tooltipViewModel?.topOffset.setState(top + seat.topOffset)
    tooltipViewModel?.xOffset.setState(pageX / params.scale)

    onPress(seat)
    onTooltipRequested(seat)

    tooltipViewModel?.isActive.setState(true)

    const screenHeight = Dimensions.get('screen').height

    if (y - scrollOffset * 0.3 < screenHeight * 0.4) {
      tooltipViewModel?.position.setState('top')
    } else {
      tooltipViewModel?.position.setState('bottom')
    }
  }

  return (
    <View style={[styles.row]}>
      {seats.map(seat => {
        const svgStyle = {
          strokeColor: colorTheme.seatStrokeColor,
          armrestColor: colorTheme.seatArmrestColor,
          fillColor: seat.color,
          strokeWidth: colorTheme.seatStrokeWidth,
        }

        return (
          <TouchableOpacity
            key={seat.uniqId}
            disabled={seat.type == 'aisle' || seat.status == 'unavailable'}
            onPress={() => handlePress(seat)}
            onLayout={event => onSeatLayout(event, seat.uniqId)}
            children={
              <>
                {seat.color ? (
                  <SvgXml xml={seatTemplateService.getSeatIcon(seat.seatType, svgStyle)} width="100%" height="100%" />
                ) : null}
                <View
                  children={
                    <Text
                      children={seat.number}
                      style={[
                        {
                          fontSize: 30,
                          color: colorTheme.seatLabelColor ?? 'white',
                          textAlign: 'center',
                        },
                        getStyleByNumber(seat.seatIconType),
                      ]}
                    />
                  }
                  style={[
                    {
                      position: 'absolute',
                      top: '18%',
                      width: '100%',
                    },
                    getContainerStyleByNumber(seat.seatIconType),
                  ]}
                />
                {seat.passenger != undefined ? (
                  <View
                    children={
                      <Text children={seat.passenger.abbr} style={{color: 'white', fontSize: 36, fontWeight: 'bold'}} />
                    }
                    style={[
                      {
                        borderRadius: 50,
                        backgroundColor:
                          seat.passenger.passengerColor != undefined
                            ? seat.passenger.passengerColor
                            : colorTheme.defaultPassengerBadgeColor,
                      },
                      styles.marker,
                    ]}
                  />
                ) : (
                  <></>
                )}
              </>
            }
            style={[
              {
                height: seat.size.height,
                width: seat.size.width,
                marginTop: seat.topOffset,
              },
              getSeatRotationStyle(seat.rotation),
            ]}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  marker: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
