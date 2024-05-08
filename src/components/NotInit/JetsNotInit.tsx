import React from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';

export const JetsNotInit = () => {
  return (
    <View
      children={
        <ActivityIndicator
          size="large"
          color="#000"
          style={{alignSelf: 'center', top: Dimensions.get('screen').height * 0.4, position: 'absolute'}}
        />
      }
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 100000,
  },
});
