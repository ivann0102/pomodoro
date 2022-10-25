import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Vibration,
} from 'react-native';
export default function Timer(props) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [isPaused, setPause] = useState(true);
  const [isWorking, setWork] = useState(true);
  const setImage = props.setImage;
  let interval;
  useEffect(() => {
    //   Vibration.vibrate(1000, false);
    //   console.log('vibrated');
    interval = setInterval(() => {
      clearInterval(interval);
      if (isPaused) return;
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          Vibration.vibrate(500)
          setWork(!isWorking);
          let minutes = isWorking ? 0 : 0;
          let seconds = 5;

          setSeconds(seconds);
          setMinutes(minutes);
          setImage();
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, isPaused]);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        setPause(!isPaused);
        // console.log(isPaused);
      }}
      onLongPress={() => {
        clearInterval(interval);
        setPause(true);
        setMinutes(0);
        setSeconds(7);
        setImage('w');
      }}
    >
      <ImageBackground
        style={styles.image}
        source={require('../assets/tomato.png')}
        resizeMode="contain">
        <View style={styles.timer}>
          <Text style={styles.minutes}>{minutes}</Text>
          <Text style={styles.seconds}>{seconds}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  timer: {
    // flex: 1,
    marginTop: 100,
    // backgroundColor: 'red',
  },
  minutes: {
    fontSize: 40,
    color: 'white',
    // color: 'pink',
    textAlign: 'center',
  },
  seconds: {
    fontSize: 30,
    // color: 'pink',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  button: {
    flex: 1,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
});
