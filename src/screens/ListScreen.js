import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{
			name: 'Friend #01', age: 'Age 2'
		},
		{
			name: 'Friend #02', age: 'Age 4'
		},
		{
			name: 'Friend #03' , age: 'Age 6'
		},
		{
			name: 'Friend #04', age: 'Age 8'
		},
		{
			name: 'Friend #05', age: 'Age 10'
		},
		{
			name: 'Friend #06', age: 'Age 12'
		},
		{
			name: 'Friend #07', age: 'Age 14'
		},
		{
			name: 'Friend #08', age: 'Age 16'
		},
		{
			name: 'Friend #09', age: 'Age 18'
		},
		{
			name: 'Friend #10', age: 'Age 20'
		}
	]

	return (
	<FlatList 
	//horizontal
	//showShorizontalScrollIndicator={false}
	keyExtractor={(friend) => friend.name}
		//if add key, não mostra ela, mas garente o funcionamente correto
	data={friends} 
	//renderItem={(element) => {}}
	// element === { itenm: { name: 'Friend1'}, index: 0 }
	renderItem={( { item }) => {
			// item === { name: 'Friend1'}
		return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
				//item.name = Friend1...
	}}
	// item === { name: 'Friend1'}

	
	/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
})

export default ListScreen