/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
} from 'react-native-document-picker';
import axios from 'axios';
import {Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';

import {IconButton, Text} from 'react-native-paper';
import {Image} from 'react-native-svg';

// const Signature = require('./../assets/signature.svg');

export function StartScreen({navigation}) {
  const [result, setResult] = React.useState<Array<DocumentPickerResponse>>();
  const key = [
    -44571.7, 9838.75, 67399, 93422.56, 113750.31, 122355.37, 72959, 88912.33,
  ];
  const key2 = [
    -367.2, 30593.3, 6134, 4331.1, 33345.34, 1245.4, 4324.3, 1345.32,
  ];
  useEffect(() => {
    async function readFile() {
      if (result) {
        const response = await axios.get(result[0].uri);
        // console.log(response.data.signature);
        // console.log(key);
        // eslint-disable-next-line eqeqeq
        let cond = response.data?.signature.every(
          (val, index) => val === key[index],
        );
        let cond2 = response.data?.signature.every(
          (val, index) => val === key2[index],
        );
        if (cond) {
          navigation.navigate('Loader', {
            screenName: 'AnalysisSuccess',
            sid: 1,
          });
        } else if (cond2) {
          navigation.navigate('Loader', {
            screenName: 'AnalysisSuccess',
            sid: 2,
          });
        } else {
          navigation.navigate('Loader', {screenName: 'AnalysisFailed'});
        }
      }
    }
    readFile();
  }, [navigation, result]);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      // console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      // console.warn(
      //   'multiple pickers were opened, only the last will be considered',
      // );
    } else {
      throw err;
    }
  };
  return (
    <View style={styles.container}>
      <Svg
        style={{
          position: 'absolute',
          zIndex: 1000,

          top: -50,
          left: -50,
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

      <Text
        style={{
          color: 'white',
          fontSize: 45,
          fontFamily: 'Inter',
          fontWeight: '700',
          letterSpacing: 1.35,
        }}>
        My Bank
      </Text>
      <Text
        style={{
          width: '100%',
          color: 'white',
          fontSize: 14,
          fontFamily: 'Inter',
          fontWeight: '400',
        }}>
        Banking application
      </Text>
      <Text
        style={{
          width: '100%',
          color: 'white',
          fontSize: 14,
          fontFamily: 'Inter',
          fontWeight: '400',
        }}>
        powered by Brainwave Science
      </Text>
      {/* // List of cards */}
      {/* <View style={{ height: 20 }} > */}
      {/* view with row  */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F0F8FF',
            elevation: 5, // For Android
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            marginBottom: 10,
            borderRadius: 6,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          {/* card 1 */}
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: '#151940',
                  fontSize: 18,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  letterSpacing: 1.35,

                  // wordWrap: 'break-word',
                }}>
                Get Started
              </Text>
              {/* <Text
                style={{
                  width: '100%',
                  color: '#3A759F',
                  fontSize: 12,
                  fontFamily: 'Inter',
                  fontWeight: '400',
                }}>
                start your banking journey
              </Text> */}
            </View>
          </View>
          <IconButton
            icon="arrow-right"
            size={20}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </TouchableOpacity>

      {/* <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text> */}
    </View>
  );
}

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    elevation: 0, // This removes the shadow on Android
  },
  iconButton: {
    overflow: 'visible',
    backgroundColor: 'white',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    color: 'white',
    borderRadius: 8,
    borderWidth: 0.2,
    elevation: 5, // For Android
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleText: {
    color: 'black',
    display: 'none',
    fontSize: 18,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to right, red , yellow)',
    padding: 20,
    width: '100%',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
