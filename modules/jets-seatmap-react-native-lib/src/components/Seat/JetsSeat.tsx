import {useContext} from 'react'
import {SvgXml} from 'react-native-svg'
import {StyleSheet, Text, View} from 'react-native'
import {JetsContext} from '../../common'
import {getContainerStyleByNumber, getStyleByNumber} from './models/SeatTypes'
import {seatTemplateService} from './library/service'

export const JetsSeat = ({seat}: {seat: SeatModel}) => {
  const {colorTheme, seatOverride} = useContext(JetsContext)

  const svgStyle = {
    strokeColor: colorTheme.seatStrokeColor,
    armrestColor: colorTheme.seatArmrestColor,
    fillColor: seat.color,
    strokeWidth: colorTheme.seatStrokeWidth,
  }

  return (
    <>
      {seatOverride != undefined ? (
        seatOverride({seat: seat})
      ) : (
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
      )}
    </>
  )
}

const styles = StyleSheet.create({
  marker: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
