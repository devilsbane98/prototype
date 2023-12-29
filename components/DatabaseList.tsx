import * as React from 'react';
import {useEffect} from 'react';
import {
  Appbar,
  IconButton,
  Text,
  List,
  Avatar,
  Button,
  BottomNavigation,
} from 'react-native-paper';

import {
  View,
  Image,
  LogBox,
  Button as NativeButton,
  TouchableOpacity,
} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import {headerStyles, styles} from './Home';

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
      headerShown: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      // headerLeft: props => (
      //   <HeaderBackButton
      //     {...props}
      //     onPress={() => {
      //       navigation.navigate('Home');
      //     }}
      //   />
      // ),
    });
  });

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
      <List.Section>
        <Text
          style={{
            color: '#151940',
            fontSize: 45,
            fontFamily: 'Inter',
            fontWeight: '700',
            letterSpacing: 1.35,
          }}>
          Database
        </Text>
        <Text
          style={{
            width: '100%',
            color: '#3A759F',
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: '400',
            paddingBottom: 20,
          }}>
          Customer List
        </Text>

        {data.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Stimuli')}
            style={headerStyles.iconButton}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 8,
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
                  <Avatar.Image
                    size={50}
                    style={{
                      marginLeft: 10,
                    }}
                    source={item.image}
                  />
                  {/* <SignatureIcon
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#F0F8FF',
                    }}
                  /> */}
                </View>
                <View
                  style={{
                    marginLeft: 20,
                  }}>
                  <Text
                    style={{
                      color: '#151940',
                      fontSize: 18,
                      fontFamily: 'Inter',
                      fontWeight: '700',
                      letterSpacing: 1.35,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      width: '100%',
                      color: '#3A759F',
                      fontSize: 12,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                    }}>
                    Customer {item.id}
                  </Text>
                </View>
              </View>
              <NativeButton
                onPress={() => {
                  navigation.navigate('Home');
                }}
                title="See More"
              />
            </View>
          </TouchableOpacity>
          // <Text
          //   style={{
          //     backgroundColor: 'whitesmoke',
          //     marginTop: 20,
          //     shadowColor: '#171717',
          //     shadowOffset: {width: -2, height: 4},
          //     shadowOpacity: 0.2,
          //     shadowRadius: 3,
          //     borderRadius: 5,
          //     display: 'flex',
          //     flexDirection: 'column',
          //     justifyContent: 'center',
          //     padding: 10,
          //     paddingLeft: 20,
          //     width: 330,
          //   }}>
          //   {' '}
          //   {/* <List.Item
          //     title={item.name}
          //     left={() => ( */}
          //   <Avatar.Image
          //     size={50}
          //     style={{
          //       marginLeft: 10,
          //     }}
          //     source={item.image}
          //   />
          //   {/* )}
          //   /> */}
          //   <NativeButton
          //     onPress={() => {
          //       navigation.navigate('Home');
          //     }}
          //     title="View More"
          //   />
          // </Text>

          // </Button>
        ))}
      </List.Section>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//   },
//   item: {
//     backgroundColor: '#e6e6ff',
//     padding: 15,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     width: 300,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
