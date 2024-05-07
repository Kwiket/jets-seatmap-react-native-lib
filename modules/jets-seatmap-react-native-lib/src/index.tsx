import {Text, View} from 'react-native'
import {SvgXml} from 'react-native-svg'
import {JetsSeatMap as SeatMap, seatTemplateService} from './components'
import {AVAILABILITY_MOCK, CONFIG_MOCK, FLIGHT_MOCK, PASSENGERS_MOCK} from './components/Demo/constants'
import {getContainerStyleByNumber, getStyleByNumber} from './components/Seat/models/SeatTypes'

const SeatOverride = ({seat}: {seat: SeatModel}) => {
  return (
    <View
      children={
        <>
          {seat.color ? (
            <SvgXml
              xml={seatTemplateService.getSeatIcon(seat.seatType, {
                strokeColor: 'red',
                armrestColor: 'green',
                fillColor: seat.color,
                strokeWidth: 'blue',
              })}
              width="100%"
              height="100%"
            />
          ) : null}
          <View
            children={
              <Text
                children={seat.number}
                style={[
                  {
                    fontSize: 30,
                    color: 'white',
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
                    seat.passenger.passengerColor != undefined ? seat.passenger.passengerColor : 'yellow',
                },
                {width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center'},
              ]}
            />
          ) : (
            <></>
          )}
          {seat.color && (
            <View
              children={<Text children={'test'} style={{textAlign: 'center', width: '100%', fontSize: 30}} />}
              style={{
                position: 'absolute',
                backgroundColor: 'yellow',
                height: 40,
                width: '100%',
                alignSelf: 'center',
                top: -10,
                borderRadius: 50,
              }}
            />
          )}
        </>
      }
    />
  )
}

export const JetsSeatMap = ({
  flight,
}: {
  flight: FlightModel
  availability: AvailabilityModel
  passengers: ParamsModel
  config: ConfigModel
  currentDeckIndex: number
  onSeatMapInited: any
  onSeatSelected: any
  onSeatUnselected: any
  onTooltipRequested: any
  onLayoutUpdated: any
  seatOverride: JSX.Element
}) => {
  return (
    <View>
      {flight != undefined ? (
        <SeatMap
          flight={flight}
          config={CONFIG_MOCK}
          passengers={PASSENGERS_MOCK}
          availability={AVAILABILITY_MOCK}
          //   seatOverride={SeatOverride}
        />
      ) : (
        <SeatMap flight={FLIGHT_MOCK} config={CONFIG_MOCK} passengers={PASSENGERS_MOCK} currentDeckIndex={1} />
      )}
    </View>
  )
}
