import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {JetsSeatMap} from 'react-native-jets-seatmap-react-native-lib';

const DemoScreen = ({route, navigation}) => {
  const {config} = route.params;

  return <SafeAreaView children={<JetsSeatMap flight={config} />} />;
};

const FirstScreen = () => {
  const navigation = useNavigation();

  const firstType = {
    id: '111',
    airlineCode: 'LH',
    flightNo: '7060',
    departureDate: '2024-05-31',
    departure: 'PEK',
    arrival: 'CAN',
    cabinClass: 'A',
    planeCode: '',
  };

  const secondType = {
    id: '111',
    airlineCode: 'LH',
    flightNo: '7060',
    departureDate: '2024-05-25',
    departure: 'PEK',
    arrival: 'CAN',
    cabinClass: 'A',
    planeCode: '',
  };

  const thirdType = {
    id: '111',
    airlineCode: 'LH',
    flightNo: '400',
    departureDate: '2024-10-29',
    departure: 'FRA',
    arrival: 'JFK',
    cabinClass: 'A',
    planeCode: '',
  };

  const forthType = {
    id: '111',
    airlineCode: 'EK',
    flightNo: '50',
    departureDate: '2024-10-29',
    departure: 'MUC',
    arrival: 'DXB',
    cabinClass: 'A',
    planeCode: '',
  };

  return (
    <View
      children={
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('demoScreen', {
                config: firstType,
              });
            }}
            children={<Text children="config 1" />}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('demoScreen', {
                config: secondType,
              });
            }}
            children={<Text children="config 2" />}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('demoScreen', {
                config: thirdType,
              });
            }}
            children={<Text children="config 3" />}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('demoScreen', {
                config: forthType,
              });
            }}
            children={<Text children="config 4" />}
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
