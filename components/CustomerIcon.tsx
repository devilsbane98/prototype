import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M17.333 7.583a4.333 4.333 0 1 1-8.666 0 4.333 4.333 0 0 1 8.666 0Zm-2.166 0a2.167 2.167 0 1 1-4.334 0 2.167 2.167 0 0 1 4.334 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#b)"
      d="M17.333 16.25a1.083 1.083 0 0 0-1.083-1.083h-6.5a1.083 1.083 0 0 0-1.083 1.083v6.5H6.5v-6.5A3.25 3.25 0 0 1 9.75 13h6.5a3.25 3.25 0 0 1 3.25 3.25v6.5h-2.167v-6.5Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13}
        x2={13}
        y1={3.25}
        y2={11.917}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5BA0D7" />
        <Stop offset={1} stopColor="#3A759F" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={13}
        x2={13}
        y1={13}
        y2={22.75}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5BA0D7" />
        <Stop offset={1} stopColor="#3A759F" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
