import {View} from 'react-native'
import {JetsSeatMap} from './components'
import {AVAILABILITY_MOCK, CONFIG_MOCK, FLIGHT_MOCK, PASSENGERS_MOCK} from './components/Demo/constants'

export const SeatMap = ({flight}) => {
  return (
    <View>
      {flight != undefined ? (
        <JetsSeatMap flight={flight} config={CONFIG_MOCK} passengers={PASSENGERS_MOCK} currentDeckIndex={1} />
      ) : (
        <JetsSeatMap flight={FLIGHT_MOCK} config={CONFIG_MOCK} passengers={PASSENGERS_MOCK} currentDeckIndex={1} />
      )}
    </View>
  )
}
