import React, {useState} from 'react';
import {JetsButton} from '../Button/JetsButton';
import {JetsSeatMap} from '../SeatMap';
import {FLIGHT_MOCK, AVAILABILITY_MOCK, PASSENGERS_MOCK, CONFIG_MOCK} from './constants';

export const DemoComponent = () => {
  const [flight, setFlight] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [passengers, setPassengers] = useState(null);
  const [defaultFlight, setDefaultFlight] = useState(JSON.stringify(FLIGHT_MOCK, null, 2));
  const [defaultAvailability, setDefaultAvailability] = useState(JSON.stringify(AVAILABILITY_MOCK, null, 2));
  const [defaultPassengers, setDefaultPassengers] = useState(JSON.stringify(PASSENGERS_MOCK, null, 2));
  const [defaultDeckIndex, setDefaultDeckIndex] = useState(0);
  const [deckIndex, setDeckIndex] = useState(0);

  const onSetFlight = () => {
    setFlight(JSON.parse(defaultFlight));
  };

  const onSetAvailability = () => {
    setAvailability(JSON.parse(defaultAvailability));
  };

  const onSetPassengers = () => {
    setPassengers(JSON.parse(defaultPassengers));
  };

  const onFlightChange = e => {
    setDefaultFlight(e.target.value);
  };

  const onAvailabilityChange = e => {
    setDefaultAvailability(e.target.value);
  };

  const onPassengersChange = e => {
    setDefaultPassengers(e.target.value);
  };

  const onDeckChange = e => {
    setDefaultDeckIndex(e.target.value);
  };

  const onSetDeck = () => {
    setDeckIndex(defaultDeckIndex);
  };

  return (
    <div className="jets-demo">
      <div className="jets-demo--controllers">
        <div className="jets-demo--controller">
          <textarea onChange={e => onFlightChange(e)} defaultValue={defaultFlight} />
          <JetsButton className="jets-btn jets-demo--btn" content="INIT SEAT MAP" onPress={onSetFlight} />
        </div>
        <div className="jets-demo--controller">
          <textarea onChange={e => onAvailabilityChange(e)} defaultValue={defaultAvailability} />
          <JetsButton className="jets-btn jets-demo--btn" content="SET AVAILABILITY" onPress={onSetAvailability} />
        </div>
        <div className="jets-demo--controller">
          <textarea onChange={e => onPassengersChange(e)} defaultValue={defaultPassengers} />
          <JetsButton className="jets-btn jets-demo--btn" content="SET PASSENGERS" onPress={onSetPassengers} />
        </div>
        <div className="jets-demo--controller">
          <textarea onChange={e => onDeckChange(e)} defaultValue={0} />
          <JetsButton className="jets-btn jets-demo--btn" content="SET DECK" onPress={onSetDeck} />
        </div>
      </div>
      <div className="jets-demo--seat-map">
        <JetsSeatMap
          flight={flight}
          config={CONFIG_MOCK}
          availability={availability}
          passengers={passengers}
          currentDeckIndex={deckIndex}
        />
      </div>
    </div>
  );
};
