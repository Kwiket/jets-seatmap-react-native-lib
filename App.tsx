import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {demoConstants, JetsSeatMap} from 'react-native-jets-seatmap-react-native-lib';

const DemoScreen = ({route, navigation}) => {
  const {config, flight, availability, passengers} = route.params;

  return (
    <SafeAreaView
      children={<JetsSeatMap flight={flight} availability={availability} passengers={passengers} config={config} />}
    />
  );
};

const FirstScreen = () => {
  const navigation = useNavigation();

  const config = demoConstants.CONFIG_MOCK;

  const flight = {
    id: '111',
    airlineCode: 'LH',
    flightNo: '7060',
    departureDate: '2024-05-31',
    departure: 'PEK',
    arrival: 'CAN',
    cabinClass: 'A',
    planeCode: '',
  };

  const availability = demoConstants.AVAILABILITY_MOCK;

  const passengers = demoConstants.PASSENGERS_MOCK;

  return (
    <View
      children={
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('demoScreen', {
                flight: flight,
                config: config,
                availability: availability,
                passengers: passengers,
              });
            }}
            children={<Text children="config 1" />}
          />
        </>
      }
      style={{alignItems: 'center', justifyContent: 'space-evenly', flex: 1}}
    />
  );
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      children={
        <Stack.Navigator
          initialRouteName={'firstScreen'}
          children={
            <>
              <Stack.Screen name={'firstScreen'} component={FirstScreen} />
              <Stack.Screen name={'demoScreen'} component={DemoScreen} />
            </>
          }
        />
      }
    />
  );
}

export default App;
