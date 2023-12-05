import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {Button, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
const data = [
  {id: 1, name: 'Subject 1', image: require('../assets/1.jpeg')},
  {id: 2, name: 'Subject 2', image: require('../assets/2.jpeg')},
];
type ItemProps = {name: string; image: any};
const Item = ({name, image}: ItemProps) => (
  <View style={styles.item}>
    <Image source={image} />
    <Text style={styles.title}>{name}</Text>
  </View>
);

export function DatabaseList({navigation}) {
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
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item name={item.name} image={item.image} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});
