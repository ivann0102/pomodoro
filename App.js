import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';


// You can import from local files
import Timer from './components/Timer';

export default function App() {
  const working = require('./assets/working.png');
  const relax = require('./assets/relax.png');
  const [source, setSource] = useState(working);
  function setImage(action = 'a') {
    if (action == 'a')
      if (source == working) {
        setSource(relax);
      } else {
        setSource(working);
      }
    else
      if (action == 'w')
        setSource(working);
      else if (action == 'r')
        setSource(relax)
  }
  return (
    <View style={styles.container}>
      <Timer style={styles.timer} setImage={setImage} />
      <Image resizeMode='contain' source={source} style={styles.bottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  timer: {
  },
  text: {
    // marginRight: 40,
    marginTop: 60,
    color: 'purple',
    fontSize: 42,
    // lineHeight: 84,
    fontWeight: 'bold',
    // textAlign: 'center',
    // backgroundColor: "#000000c0",
  },
  button: {
    flex: 1,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'

  },
  bottomImage: {
    flex: 1,
    // height: '40%',
    width: '30%',
  }
});
