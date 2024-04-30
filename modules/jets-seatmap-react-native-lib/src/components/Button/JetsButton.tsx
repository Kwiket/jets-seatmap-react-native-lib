import React from 'react'
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native'

export const JetsButton = ({
  content,
  onClick,
  disabled,
  style,
  ...attrs
}: {
  content: string
  onClick: () => void
  disabled: boolean
  style: ViewStyle
}) => {
  return (
    <TouchableOpacity
      {...attrs}
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onClick}
      disabled={disabled}
      activeOpacity={0.7}>
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  )
}

JetsButton.defaultProps = {
  content: 'Btn',
  disabled: false,
  onClick: () => {},
}

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
})
