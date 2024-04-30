import * as React from 'react'
import Svg, {G, Rect, Path} from 'react-native-svg'
const SVGComponent = props => (
  <Svg baseProfile="full" viewBox="0 -3 110 100" width={100} height={100} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G className="seat" transform="scale(2)">
      <Rect fill="lightgrey" y={4.3} width={5.36} height={32.29} rx={1.97} ry={1.97} />
      <Rect fill={'lightgrey'} x={49.02} y={4.3} width={5.36} height={32.29} rx={1.97} ry={1.97} />
      <Path
        fill={props.fillColor}
        stroke={'lightgrey'}
        strokeWidth={2}
        d="M44.94,1.07C40.15.71,33.1,0,26.87,0,21.37,0,13.66.47,9.35.93A4.41,4.41,0,0,0,5.41,5.31V33H49V5.47A4.41,4.41,0,0,0,44.94,1.07Z"
      />
      <Path
        fill={props.fillColor}
        stroke={'lightgrey'}
        strokeWidth={2}
        d="M47.56,37.58h-40a2.85,2.85,0,0,1-2.85-2.85V31.43a2.85,2.85,0,0,1,2.85-2.85h.11A139.86,139.86,0,0,0,27.56,30a150.41,150.41,0,0,0,19.9-1.38h.1a2.85,2.85,0,0,1,2.85,2.85v3.31A2.85,2.85,0,0,1,47.56,37.58Z"
      />
      <Rect fill="rgb(255, 255, 255)" x={19.25} y={28.88} width={15.92} height={5.47} rx={2.02} ry={2.02} />
    </G>
  </Svg>
)
export default SVGComponent
