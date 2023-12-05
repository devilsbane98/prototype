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

  useEffect(() => {
    async function readFile() {
      if (result) {
        const response = await axios.get(result[0].uri);
        if (response.data?.fruit === 'Apple') {
          navigation.navigate('Loader', {screenName: 'AnalysisSuccess'});
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
        Select Data File for Analysis
      </Button>
      <View style={{height: 20}} />
      <Button
        mode="elevated"
        onPress={() => navigation.navigate('DatabaseList')}>
        Database List
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
