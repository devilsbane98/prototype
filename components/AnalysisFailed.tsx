import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';

export function AnalysisFailed({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: props => (
        <HeaderBackButton
          {...props}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontSize: 20}}>No Match Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
