import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface HelloCompoProps {
  name: string;
}

const HelloCompo = ({ name }: HelloCompoProps) => {
  return (
    <Text>Hello {name}</Text>
  )
}

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <HelloCompo name='tono' />
      <HelloCompo name='tono1' />
      <HelloCompo name='tono2' />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  // center:{
  //   alignItems:'center'
  // }
})