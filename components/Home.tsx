/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
} from 'react-native-document-picker';
import axios from 'axios';
import {Appbar, IconButton, Text} from 'react-native-paper';
import {SvgUri} from 'react-native-svg';
import SignatureIcon from './SignatureIcon';
import CustomerIcon from './CustomerIcon';
import AuthenticateIcon from './AuthenticateIcon';
import {Defs, LinearGradient, Path, Stop, Svg, G, Rect} from 'react-native-svg';
// const Signature = require('./../assets/signature.svg');

export function HomeScreen({navigation}) {
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
      <Appbar.Header style={headerStyles.container}>
        {/* Left side square button */}
        <IconButton
          icon="arrow-left"
          size={20}
          style={headerStyles.iconButton}
          onPress={() => navigation.pop()}
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
        Home
      </Text>
      <Text
        style={{
          width: '100%',
          color: '#3A759F',
          fontSize: 18,
          fontFamily: 'Inter',
          fontWeight: '400',
        }}>
        Please choose one of the listed options
      </Text>
      {/* // List of cards */}
      {/* <View style={{ height: 20 }} > */}
      {/* view with row  */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Stimuli')}
        style={{
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* card 1 */}
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* <SvgUri width={50} height={50} source={'./../assets/signature.svg'} /> */}
            {/* <Signature height={10} weight={10} /> */}
            {/* <IconButton
            icon="clipboard-signature"
            size={20}
            style={headerStyles.iconButton}
            onPress={() => navigation.goBack()}
          /> */}
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#F0F8FF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <SignatureIcon
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#F0F8FF',
                }}
              />
            </View>
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
                Capture Signature
              </Text>
              <Text
                style={{
                  width: '100%',
                  color: '#3A759F',
                  fontSize: 12,
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}>
                Take your signature
              </Text>
            </View>
          </View>
          <IconButton
            icon="arrow-right"
            size={20}
            onPress={() => navigation.goBack()}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DatabaseList')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
                width: 40,
                height: 40,
                backgroundColor: '#F0F8FF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <CustomerIcon
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#F0F8FF',
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: '#151940',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  letterSpacing: 1.35,

                  // wordWrap: 'break-word',
                }}>
                New Bank Customers
              </Text>
              <Text
                style={{
                  width: '100%',
                  color: '#3A759F',
                  fontSize: 12,
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}>
                New Bank Customers
              </Text>
            </View>
          </View>
          <IconButton
            icon="arrow-right"
            size={20}
            onPress={() => navigation.navigate('DatabaseList')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });
            setResult([pickerResult]);
          } catch (e) {
            handleError(e);
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* card 1 */}
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* <SvgUri width={50} height={50} source={'./../assets/signature.svg'} /> */}
            {/* <Signature height={10} weight={10} /> */}
            {/* <IconButton
            icon="clipboard-signature"
            size={20}
            style={headerStyles.iconButton}
            onPress={() => navigation.goBack()}
          /> */}
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#F0F8FF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <AuthenticateIcon
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#F0F8FF',
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: '#151940',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  letterSpacing: 1.35,

                  // wordWrap: 'break-word',
                }}>
                Authenticate with the Bank
              </Text>
              <Text
                style={{
                  width: '100%',
                  color: '#3A759F',
                  fontSize: 12,
                  fontFamily: 'Inter',
                  fontWeight: '400',
                }}>
                Verify your banking account
              </Text>
            </View>
          </View>
          <IconButton
            icon="arrow-right"
            size={20}
            onPress={async () => {
              try {
                const pickerResult = await DocumentPicker.pickSingle({
                  presentationStyle: 'fullScreen',
                  copyTo: 'cachesDirectory',
                });
                setResult([pickerResult]);
              } catch (e) {
                handleError(e);
              }
            }}
          />
        </View>
      </TouchableOpacity>
      <Svg
        onPress={() => navigation.navigate('Start')}
        style={{
          position: 'absolute',
          bottom: 0,
        }}
        width={370}
        height={122}
        fill="none">
        <G filter="url(#b)">
          <Rect width={354} height={65.531} x={8} y={4} fill="url(#c)" rx={8} />
        </G>
        <Path
          stroke="#F7F7F7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M39.196 36.298h10.276M43.478 32.007l-4.282 4.29 4.282 4.29"
        />
        <Path
          fill="#fff"
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
            <Stop stopColor="#F48059" />
            <Stop offset={1} stopColor="#FCB856" />
          </LinearGradient>
        </Defs>
      </Svg>
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
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
