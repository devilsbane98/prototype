import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <Path
        stroke="url(#a)"
        d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      />
      <Path
        stroke="url(#b)"
        d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5M16 4h2a2 2 0 0 1 1.73 1"
      />
      <Path
        stroke="url(#c)"
        d="M8 18h1m9.42-8.39a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={2}
        y2={6}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5BA0D7" />
        <Stop offset={1} stopColor="#3A759F" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        x2={12}
        y1={4}
        y2={22}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5BA0D7" />
        <Stop offset={1} stopColor="#3A759F" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={15.003}
        x2={15.003}
        y1={8.995}
        y2={18}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5BA0D7" />
        <Stop offset={1} stopColor="#3A759F" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
