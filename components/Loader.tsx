import * as React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function Loader({route, navigation}) {
  useEffect(() => {
    const {screenName, sid} = route.params;
    setTimeout(() => {
      navigation.navigate(screenName, {sid});
    }, 4000);
  }, [navigation]);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
