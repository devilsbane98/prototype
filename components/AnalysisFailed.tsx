import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import {Defs, LinearGradient, Path, Stop, Svg, G, Rect} from 'react-native-svg';
import {Appbar, IconButton} from 'react-native-paper';
import {headerStyles, styles} from './Home';

export function AnalysisFailed({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerLeft: props => (
      //   <HeaderBackButton
      //     {...props}
      //     onPress={() => {
      //       navigation.navigate('Home');
      //     }}
      //   />
      // ),
    });
  });
  return (
    <View style={styles.container}>
      <Svg
        style={{
          position: 'absolute',
          zIndex: 1000,

          top: -20,
          left: -20,
        }}
        width={225}
        height={226}
        fill="none">
        <Path
          fill="url(#a)"
          fillOpacity={0.5}
          d="M55.305-113.845a169.117 169.117 0 0 0-94.127 28.449A169.493 169.493 0 0 0-101.29-9.358a169.779 169.779 0 0 0-9.739 97.981 169.627 169.627 0 0 0 46.274 86.879 169.228 169.228 0 0 0 86.68 46.474 169.07 169.07 0 0 0 97.852-9.605 169.357 169.357 0 0 0 76.021-62.444 169.73 169.73 0 0 0 28.55-94.223c0-44.923-17.802-88.01-49.496-119.799a169.172 169.172 0 0 0-119.547-49.75Zm0 297.161a127.545 127.545 0 0 1-71.032-21.443 127.831 127.831 0 0 1-47.137-57.374 128.045 128.045 0 0 1-7.328-73.935 127.928 127.928 0 0 1 34.956-65.535 127.624 127.624 0 0 1 65.438-35.007 127.509 127.509 0 0 1 73.827 7.338 127.72 127.72 0 0 1 57.289 47.207 127.996 127.996 0 0 1 21.411 71.137 127.71 127.71 0 0 1-37.321 90.235 127.33 127.33 0 0 1-90.103 37.377Z"
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={-99.505}
            x2={210.009}
            y1={-13.351}
            y2={124.239}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#F48059" />
            <Stop offset={1} stopColor="#FCB856" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Svg
        style={{
          position: 'absolute',
        }}
        width={430}
        height={932}
        fill="none">
        <Path fill="url(#a)" d="M0 0h430v932H0z" />
        <Defs>
          <LinearGradient
            id="a"
            x1={215}
            x2={215}
            y1={0}
            y2={932}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#F48059" />
            <Stop offset={1} stopColor="#FCB856" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Appbar.Header style={headerStyles.container}>
        {/* Left side square button */}
        <IconButton
          icon="arrow-left"
          size={20}
          style={headerStyles.iconButton}
          onPress={() => navigation.navigate('Home')}
        />
        {/* Title */}
        <View style={headerStyles.titleContainer}>
          <Text style={headerStyles.titleText}>Your Title</Text>
        </View>
        {/* Right side button with three dots */}
        <IconButton
          icon="dots-vertical"
          size={20}
          style={headerStyles.iconButton}
          onPress={() => console.log('Dots pressed')}
        />
      </Appbar.Header>
      <Text
        style={{
          color: 'white',
          fontSize: 45,
          fontFamily: 'Inter',
          fontWeight: '700',
          zIndex: 2000,
          letterSpacing: 1.35,
        }}>
        Analysis Failed
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          top: -70,
          position: 'relative',
        }}>
        <Svg
          fill="none"
          stroke="white"
          strokeWidth={1.5}
          style={{
            position: 'relative',
          }}
          viewBox="0 0 24 24">
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </Svg>

        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: '700',
            position: 'absolute',
            bottom: 80,
          }}>
          Authentication Failed
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: '700',
            position: 'absolute',
            bottom: 50,
          }}>
          Customer Not Found
        </Text>
      </View>
      <Svg
        onPress={() => navigation.navigate('Home')}
        style={{
          position: 'absolute',
          bottom: -20,
        }}
        width={370}
        height={122}
        fill="none">
        <G filter="url(#b)">
          <Rect width={354} height={65.531} x={8} y={4} fill="url(#c)" rx={8} />
        </G>
        <Path
          stroke="#FCB856"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M39.196 36.298h10.276M43.478 32.007l-4.282 4.29 4.282 4.29"
        />
        <Path
          fill="#FCB856"
          d="M162.87 42.804V29.713h4.794c.929 0 1.698.153 2.307.46.61.302 1.066.714 1.368 1.234a3.38 3.38 0 0 1 .454 1.745c0 .545-.1 1.005-.3 1.38-.2.371-.469.67-.806.895a3.536 3.536 0 0 1-1.099.486v.128c.435.021.859.162 1.272.422.418.255.763.62 1.035 1.093.273.473.41 1.048.41 1.726 0 .669-.158 1.27-.473 1.802-.312.528-.793.948-1.445 1.26-.652.306-1.485.46-2.499.46h-5.018Zm1.975-1.694h2.851c.946 0 1.623-.184 2.033-.55.409-.367.613-.825.613-1.374 0-.414-.104-.793-.313-1.138a2.237 2.237 0 0 0-.895-.825c-.383-.204-.839-.306-1.368-.306h-2.921v4.193Zm0-5.734h2.646a2.72 2.72 0 0 0 1.196-.256c.358-.17.641-.409.85-.716.213-.31.319-.677.319-1.099 0-.541-.189-.995-.568-1.361-.38-.367-.961-.55-1.745-.55h-2.698v3.982Zm12.056 7.645a4.005 4.005 0 0 1-1.687-.345 2.843 2.843 0 0 1-1.196-1.017c-.289-.443-.434-.986-.434-1.63 0-.554.106-1.01.319-1.368a2.36 2.36 0 0 1 .863-.85 4.5 4.5 0 0 1 1.215-.473c.447-.106.903-.187 1.368-.242l1.431-.167c.367-.047.633-.121.799-.224.167-.102.25-.268.25-.498v-.045c0-.558-.158-.99-.473-1.297-.311-.307-.776-.46-1.394-.46-.643 0-1.15.142-1.521.428-.367.28-.62.594-.761.94l-1.796-.41c.213-.596.524-1.078.933-1.444.414-.371.889-.64 1.426-.806a5.564 5.564 0 0 1 1.694-.255c.392 0 .807.046 1.246.14.443.09.857.256 1.24.499.388.243.705.59.953 1.042.247.447.37 1.029.37 1.745v6.52h-1.866V41.46h-.077a2.71 2.71 0 0 1-.556.729 2.959 2.959 0 0 1-.952.594c-.388.158-.853.237-1.394.237Zm.416-1.534c.528 0 .98-.105 1.355-.313.379-.21.667-.482.863-.819.2-.34.3-.705.3-1.093v-1.265c-.068.068-.2.132-.396.191a6.14 6.14 0 0 1-.659.148 76.69 76.69 0 0 1-.722.108l-.588.077c-.371.047-.71.126-1.016.236-.303.111-.546.271-.729.48-.179.204-.268.477-.268.818 0 .473.174.83.524 1.074.349.239.794.358 1.336.358Zm10.661 1.515c-.951 0-1.769-.216-2.455-.646a4.269 4.269 0 0 1-1.572-1.796c-.367-.763-.55-1.636-.55-2.62 0-.998.187-1.878.562-2.64.375-.768.904-1.366 1.586-1.797.681-.43 1.485-.645 2.409-.645.746 0 1.411.138 1.995.415a3.574 3.574 0 0 1 1.412 1.15c.363.495.578 1.072.646 1.733h-1.86a2.23 2.23 0 0 0-.703-1.19c-.362-.331-.848-.498-1.458-.498-.532 0-.999.141-1.4.422-.396.277-.705.673-.926 1.19-.222.51-.333 1.116-.333 1.815 0 .715.109 1.333.326 1.853.218.52.524.923.921 1.208.4.286.871.428 1.412.428.363 0 .691-.066.985-.198a2.02 2.02 0 0 0 .748-.581c.204-.252.347-.554.428-.908h1.86a3.614 3.614 0 0 1-.62 1.7 3.57 3.57 0 0 1-1.387 1.176c-.575.286-1.251.429-2.026.429Zm7.385-3.529-.013-2.333h.332l3.912-4.155h2.288l-4.461 4.73h-.301l-1.757 1.758Zm-1.758 3.33v-13.09h1.911v13.09h-1.911Zm6.2 0-3.516-4.666 1.317-1.336 4.545 6.003h-2.346Z"
        />
        <Defs>
          <LinearGradient
            id="c"
            x1={185}
            x2={185}
            y1={4}
            y2={69.531}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="white" />
            <Stop offset={1} stopColor="white" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//   },
// });
