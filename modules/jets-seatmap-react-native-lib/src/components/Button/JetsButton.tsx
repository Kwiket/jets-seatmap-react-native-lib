import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

export const JetsButton = ({
  content,
  onPress,
  disabled,
  style,
  foregroundColor,
  ...attrs
}: {
  content: string;
  onPress: () => void;
  disabled: boolean;
  style: ViewStyle;
  foregroundColor: TextStyle;
}) => {
  return (
    <TouchableOpacity
      children={<Text children={content} style={[styles.text, foregroundColor]} />}
      {...attrs}
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    />
  );
};

JetsButton.defaultProps = {
  content: 'Btn',
  disabled: false,
  onPress: () => {},
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9.5,
    paddingHorizontal: 18,
    height: 100,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#4071b9',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'none',
  },
  disabled: {
    backgroundColor: '#ccc',
    color: '#000',
  },
});
