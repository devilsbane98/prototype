import * as React from 'react';
// import {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useState, useCallback, useEffect} from 'react';

const targets = [require('./../assets/T1.webp')];
const irr = [
  require('./../assets/I1.jpeg'),
  require('./../assets/I2.jpg'),
  require('./../assets/I3.png'),
  require('./../assets/I4.jpg'),
];
let seq: string[] = [];
const odds = [0, 0, 0, 1];
for (let i = 0; i < 20; i++) {
  var idx = Math.floor(Math.random() * odds.length);
  if (odds[idx]) {
    seq.push(targets[0]);
  } else {
    seq.push(irr[Math.floor(Math.random() * irr.length)]);
  }
}

export const Stimuli = ({navigation}) => {
  //   console.log(seq);
  const [image, setImage] = useState(seq[0]);
  const [showImage, setShowImage] = useState(false);
  const [fixation, setFixation] = useState(true);
  const [img, setImg] = useState(0);

  useEffect(() => {
    const delay = delayInms => {
      return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    const doStimulusCycle = async () => {
      setFixation(true);
      setShowImage(false);
      console.log('fix');
      await delay(1000);
      setFixation(false);
      setShowImage(true);
      setImage(seq[img]);
      console.log('img');
      await delay(500);
      setFixation(false);
      setShowImage(false);
      console.log('blank');
      await delay(500);
      setImg(img + 1);
      await delay(500);
    };
    const intervalId = setInterval(() => {
      img < 5 ? doStimulusCycle() : clearInterval(intervalId);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [img]);
  return (
    <View style={styles.container}>
      {fixation ? (
        <Text style={styles.fixation}>X</Text>
      ) : showImage ? (
        <Image style={styles.stimulus} source={image} />
      ) : undefined}
      {img >= 5 ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Analysis');
          }}>
          <Text style={styles.proceed}>Tap to Proceed</Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  stimulus: {
    width: 300,
    resizeMode: 'contain',
  },
  fixation: {
    fontSize: 50,
    color: 'red',
  },
  proceed: {
    color: 'white',
    fontSize: 40,
  },
});
