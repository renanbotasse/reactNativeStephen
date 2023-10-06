import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput }from 'react-native';

const TextScreen = () => {
	const [name, setName] = useState('');

	return (
		<View>
			<TextInput 
			style={styles.input}
			autoCapitalize="none"
			autoCorrect={false}
			placeholder="email"
			value={ name }
			onChangeText={(newValue) => setName(newValue) }
			/>
			<Text>
My email is {name}
			</Text>
		</View>
	)

};

const styles = StyleSheet.create({
	input: {
		margin: 25,
		borderColor: 'black',
		borderWidth: 1
	}
});

export default TextScreen