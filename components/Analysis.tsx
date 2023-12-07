/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';

export function Analysis({navigation}) {
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
      <Text style={{color: 'green', fontSize: 20, padding: 10}}>
        Current Brain Signature Saved
      </Text>
      <Image
        source={require('./../assets/AnalysisGraph.png')}
        style={{height: 180, resizeMode: 'contain'}}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
