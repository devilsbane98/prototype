import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
} from 'react-native-document-picker';
import axios from 'axios';
import {Appbar, Button, IconButton, Text} from 'react-native-paper';
import {SvgUri} from 'react-native-svg';
import SignatureIcon from './SignatureIcon';
import CustomerIcon from './CustomerIcon';
import AuthenticateIcon from './AuthenticateIcon';
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
          onPress={() => navigation.goBack()}
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
          wordWrap: 'break-word',
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
            onPress={() => navigation.goBack()}
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
                  wordWrap: 'break-word',
                }}>
                Verify your banking account
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

      {/* <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text> */}
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    elevation: 0, // This removes the shadow on Android
  },
  iconButton: {
    overflow: 'visible',
    backgroundColor: '#F0F8FF',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    color: 'white',
    borderRadius: 8,
    borderWidth: 0.2,
    elevation: 5, // For Android
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
