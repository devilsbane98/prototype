/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import {headerStyles, styles} from './Home';
import {Appbar, IconButton} from 'react-native-paper';

import {AreaChart} from 'react-native-svg-charts';
import {Path, Svg, G, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import Graphsvg from '../assets/graphsvg';
import SignatureIcon from './SignatureIcon';

const data = [5, 10, 20, 6, 8, 19, 16];
const contentInset = {top: 21, bottom: 21};

export function AnalysisSuccess({route, navigation}) {
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
  const {sid} = route.params;

  return (
    <View style={styles.container}>
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
          color: '#151940',
          fontSize: 45,
          fontFamily: 'Inter',
          fontWeight: '700',
          letterSpacing: 1.35,
        }}>
        Analysis Succeeded
      </Text>

      {/* <Text style={{color: 'green', fontSize: 20}}>Match Found </Text> */}

      <View style={styles2.item}>
        {sid === 1 ? (
          <>
            <Image style={styles2.image} source={require('../assets/1.jpeg')} />
            <Text style={styles2.title}>{'Subject 1'}</Text>
            <Text style={styles2.subtitle}>{'Customer 2'}</Text>
            <Text style={styles2.title}>Accuracy: 98%</Text>
            <Graphsvg style={{marginLeft: 0}} />
            {/* <Image
              source={require('../assets/graph.png')}
              style={{width: 300, height: 300, resizeMode: 'center'}}
            /> */}
          </>
        ) : (
          <>
            <Image style={styles2.image} source={require('../assets/2.jpeg')} />
            <Text style={styles2.title}>{'Subject 2'}</Text>
            <Text style={styles2.subtitle}>{'Customer 2'}</Text>
            <Text style={styles2.title}>Accuracy: 98%</Text>
            <Graphsvg style={{marginLeft: 0}} />
            {/* <Image
              source={require('../assets/graphsvg.svg')}
              style={{width: 300, height: 300, resizeMode: 'center'}}
            /> */}
          </>
        )}
        <Svg
          onPress={() => navigation.navigate('Home')}
          style={{
            position: 'absolute',
            bottom: -70,
          }}
          width={370}
          height={122}
          fill="none">
          <G filter="url(#b)">
            <Rect width={354} height={63} x={8} y={5} fill="url(#c)" rx={8} />
          </G>
          <Path
            stroke="#F7F7F7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M338.07 36.05h-10.276M333.789 40.175l4.282-4.124-4.282-4.125"
          />
          <Path
            fill="#fff"
            d="M156.748 34.166h-1.994a3.051 3.051 0 0 0-.428-1.125 3.16 3.16 0 0 0-.767-.824 3.313 3.313 0 0 0-1.017-.512 3.962 3.962 0 0 0-1.182-.172c-.754 0-1.43.19-2.026.569-.593.379-1.062.935-1.407 1.668-.341.733-.511 1.628-.511 2.684 0 1.066.17 1.965.511 2.698.345.733.816 1.287 1.413 1.662a3.706 3.706 0 0 0 2.013.562 4.09 4.09 0 0 0 1.177-.166 3.39 3.39 0 0 0 1.016-.505 3.062 3.062 0 0 0 1.208-1.924l1.994.007a5.324 5.324 0 0 1-.62 1.777 4.895 4.895 0 0 1-1.169 1.393 5.297 5.297 0 0 1-1.624.901 6.003 6.003 0 0 1-1.994.32c-1.134 0-2.144-.269-3.03-.805-.887-.542-1.585-1.315-2.097-2.32-.507-1.006-.76-2.206-.76-3.6 0-1.397.255-2.597.767-3.598.511-1.006 1.21-1.777 2.096-2.314.887-.541 1.894-.812 3.024-.812.694 0 1.342.1 1.943.3a5.135 5.135 0 0 1 1.63.87c.481.38.88.844 1.195 1.393a5.37 5.37 0 0 1 .639 1.873Zm5.896 9.032c-.92 0-1.724-.21-2.41-.633a4.265 4.265 0 0 1-1.598-1.77c-.379-.759-.569-1.645-.569-2.66 0-1.018.19-1.908.569-2.671.379-.763.912-1.355 1.598-1.777.686-.422 1.49-.633 2.41-.633.92 0 1.724.21 2.41.633.686.422 1.219 1.014 1.598 1.777.379.763.569 1.653.569 2.672 0 1.014-.19 1.9-.569 2.659a4.265 4.265 0 0 1-1.598 1.77c-.686.422-1.49.633-2.41.633Zm.006-1.604c.597 0 1.091-.158 1.483-.473.392-.316.682-.735.87-1.26a5.026 5.026 0 0 0 .287-1.732c0-.626-.096-1.201-.287-1.726-.188-.528-.478-.952-.87-1.272-.392-.32-.886-.479-1.483-.479-.6 0-1.099.16-1.495.48-.392.319-.684.743-.876 1.271a5.08 5.08 0 0 0-.281 1.726c0 .63.093 1.208.281 1.733.192.524.484.943.876 1.259.396.315.895.473 1.495.473Zm8.165-4.424V43h-1.911v-9.818h1.835v1.598h.121a2.81 2.81 0 0 1 1.061-1.253c.486-.315 1.097-.473 1.835-.473.669 0 1.255.14 1.757.422.503.277.893.69 1.17 1.24.277.55.416 1.23.416 2.039V43h-1.912v-6.015c0-.712-.185-1.268-.556-1.668-.37-.405-.88-.608-1.527-.608-.444 0-.838.096-1.183.288a2.073 2.073 0 0 0-.812.844c-.196.366-.294.81-.294 1.33Zm12.98-3.988v1.534h-5.363v-1.534h5.363Zm-3.925-2.353h1.911v9.288c0 .37.056.65.167.838.11.183.253.309.428.377.179.064.373.096.582.096.153 0 .287-.011.402-.032l.269-.052.345 1.58a3.241 3.241 0 0 1-.473.127c-.205.047-.46.073-.767.077a3.36 3.36 0 0 1-1.406-.269 2.409 2.409 0 0 1-1.055-.869c-.269-.392-.403-.884-.403-1.477V30.83ZM185.459 43v-9.818h1.911V43h-1.911Zm.965-11.333c-.332 0-.618-.11-.856-.333a1.079 1.079 0 0 1-.352-.805c0-.315.117-.584.352-.805.238-.226.524-.34.856-.34.333 0 .616.114.85.34.239.221.358.49.358.805 0 .311-.119.58-.358.805a1.19 1.19 0 0 1-.85.333Zm4.979 5.503V43h-1.911v-9.818h1.834v1.598h.122c.225-.52.579-.938 1.061-1.253.485-.315 1.097-.473 1.834-.473.669 0 1.255.14 1.758.422.503.277.893.69 1.17 1.24.277.55.415 1.23.415 2.039V43h-1.911v-6.015c0-.712-.185-1.268-.556-1.668-.371-.405-.88-.608-1.528-.608-.443 0-.837.096-1.182.288a2.066 2.066 0 0 0-.812.844c-.196.366-.294.81-.294 1.33Zm14.616 1.758v-5.746h1.917V43h-1.879v-1.7h-.102a3.063 3.063 0 0 1-1.087 1.31c-.494.345-1.11.518-1.847.518-.631 0-1.189-.139-1.675-.416-.481-.28-.861-.696-1.138-1.246-.272-.55-.409-1.23-.409-2.04v-6.244h1.912v6.015c0 .669.185 1.201.556 1.598.37.396.852.594 1.444.594.358 0 .714-.09 1.068-.268.358-.18.654-.45.888-.812.239-.362.356-.822.352-1.38Zm8.267 4.27c-.967 0-1.8-.206-2.499-.62a4.202 4.202 0 0 1-1.611-1.758c-.375-.758-.563-1.647-.563-2.665 0-1.006.188-1.892.563-2.66.379-.766.908-1.365 1.585-1.795.682-.43 1.479-.646 2.391-.646.554 0 1.091.092 1.611.275.519.183.986.47 1.399.863.414.392.74.901.978 1.527.239.623.358 1.379.358 2.27v.677h-7.804v-1.432h5.931c0-.503-.102-.948-.306-1.336a2.328 2.328 0 0 0-.863-.926c-.367-.226-.797-.34-1.291-.34-.537 0-1.006.133-1.407.397-.396.26-.703.601-.92 1.023-.213.417-.32.871-.32 1.361v1.119c0 .656.115 1.214.345 1.675.235.46.561.812.978 1.054.418.239.906.358 1.464.358.362 0 .693-.05.991-.153a2.047 2.047 0 0 0 1.272-1.246l1.809.325c-.145.533-.405 1-.78 1.4a3.778 3.778 0 0 1-1.4.927c-.558.218-1.195.326-1.911.326Z"
          />
          <Defs>
            <LinearGradient
              id="c"
              x1={185}
              x2={185}
              y1={5}
              y2={68}
              gradientUnits="userSpaceOnUse">
              <Stop stopColor="#F48059" />
              <Stop offset={1} stopColor="#FCB856" />
            </LinearGradient>
          </Defs>
        </Svg>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#3A759F',
    color: 'white',
    paddingTop: 50,
    marginLeft: -8,
    marginTop: 50,
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    padding: 4,
    fontWeight: '700',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,

    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    position: 'absolute',
    top: -50,
  },
});
