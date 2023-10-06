import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const name = 'Renan'
const greeting = 'Hi there!';
const bye = <Text>Adios</Text>;


 return (
 <View>
 <Text style={styles.textStyle}>Getting started with React Native!</Text>
 <Text style={{ fontSize: 20 }}>My name is {name}</Text>
 <Text>{greeting}</Text>
 {bye}
 </View>
 )
};


const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	}
});

export default ComponentsScreen