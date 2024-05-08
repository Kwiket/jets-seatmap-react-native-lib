import {View} from 'react-native';
import {JetsSeatMap as SeatMap} from './components';
import {AVAILABILITY_MOCK, CONFIG_MOCK, PASSENGERS_MOCK} from './components/Demo/constants';

export const demoConstants = {AVAILABILITY_MOCK, CONFIG_MOCK, PASSENGERS_MOCK};

export const JetsSeatMap = ({
  flight,
  availability,
  passengers,
  config,
  currentDeckIndex,
  onSeatMapInited,
  onSeatSelected,
  onSeatUnselected,
  onTooltipRequested,
  onLayoutUpdated,
  seatOverride,
}: {
  flight: FlightModel;
  availability: AvailabilityModel;
  passengers: ParamsModel;
  config: ConfigModel;
  currentDeckIndex: number;
  onSeatMapInited: any;
  onSeatSelected: any;
  onSeatUnselected: any;
  onTooltipRequested: any;
  onLayoutUpdated: any;
  seatOverride: JSX.Element;
}) => {
  return (
    <View>
      <SeatMap
        flight={flight}
        config={config}
        passengers={passengers}
        availability={availability}
        currentDeckIndex={currentDeckIndex}
        onSeatMapInited={onSeatMapInited}
        onSeatSelected={onSeatSelected}
        onSeatUnselected={onSeatUnselected}
        onTooltipRequested={onTooltipRequested}
        onLayoutUpdated={onLayoutUpdated}
        seatOverride={seatOverride}
      />
    </View>
  );
};
