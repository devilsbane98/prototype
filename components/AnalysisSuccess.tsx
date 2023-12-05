/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';

export function AnalysisSuccess({navigation}) {
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
      <Text style={{color: 'green', fontSize: 20}}>Match Found</Text>
      <View style={styles.item}>
        <Image source={require('../assets/1.jpeg')} />
        <Text style={styles.title}>{'Subject 1'}</Text>
        <Text style={styles.title}>Accuracy: 98%</Text>
        <Image
          source={require('../assets/graph.png')}
          style={{width: 300, height: 300, resizeMode: 'center'}}
        />
      </View>
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
  item: {
    backgroundColor: '#e6e6ff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 340,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    padding: 5,
  },
});
