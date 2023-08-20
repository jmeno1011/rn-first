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
import Title from './src/components/UI/Title/Title';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './src/components/UI/Typography';

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
      <Title>Typography</Title>
      <Heading1>heading1</Heading1>
      <Heading2>heading2</Heading2>
      <Heading3>heading3</Heading3>
      <Heading4>heading4</Heading4>
      <Heading5>heading5</Heading5>
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