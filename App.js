/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World., this is my mobile app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const GreetingProps = {
  name: string,
};

const Greeting = (GreetingProps) => {
  return(
    <View styles ={styles.center}>
      <Text>Roll Upp</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Greeting
*/
// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});