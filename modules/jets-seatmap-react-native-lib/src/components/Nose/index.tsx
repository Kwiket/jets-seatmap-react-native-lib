import React, {useContext, useState, useEffect} from 'react'
import {View, Dimensions} from 'react-native'
import {SvgUri} from 'react-native-svg'
import {JetsContext} from '../../common'

export const JetsNose = ({isFull}) => {
  const {colorTheme} = useContext(JetsContext)

  const [svgUri, setSvgUri] = useState('')

  useEffect(() => {
    const {fuselageFillColor, fuselageStrokeColor, fuselageWindowsColor, floorColor, fuselageStrokeWidth} = colorTheme
    const strokeWidth = fuselageStrokeWidth
    const straightFillColor = isFull ? fuselageFillColor : floorColor

    // Since we can't use the <style> tag, we need to directly apply styles within the SVG XML.
    const svgContent = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="214" viewBox="0 0 200 214">
        <!-- We apply styles directly to elements here -->
        <path fill="${straightFillColor}" d="M1.5 213.5H198.5L198.3 189.5V189.5C198.432 183.009 197.551 176.63 195.513 170.466C183.455 134.002 137.233 2 100 2C62.7343 2.08626 16.4645 134.331 4.45578 170.661C2.43787 176.766 1.5 183.07 1.5 189.5V189.5L1.5 213.5Z" />
        <!-- Rest of your SVG paths with direct style application -->
      </svg>
    `

    setSvgUri(`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`)
  }, [colorTheme, isFull])

  const windowWidth = Dimensions.get('window').width
  const scaleFactor = windowWidth / 200 // 200 is the original SVG width

  return (
    <View style={{transform: [{scale: scaleFactor}]}}>
      {svgUri ? <SvgUri width="100%" height="100%" uri={svgUri} /> : null}
    </View>
  )
}
