import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';
import axios from 'axios';
import {Button} from 'react-native-paper';

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
      <Button mode="elevated" onPress={() => navigation.navigate('Stimuli')}>
        Capture Signature
      </Button>
      <View style={{height: 20}} />
      <Button
        mode="elevated"
        onPress={() => navigation.navigate('DatabaseList')}>
        View Bank Customers
      </Button>
      <View style={{height: 20}} />
      <Button
        mode="elevated"
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
        Authenticate with the bank
      </Button>
      {/* <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
