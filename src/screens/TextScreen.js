import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput }from 'react-native';

const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Enter Password: </Text>
			<TextInput 
			style={styles.input}
			passwordRules="minlength: 5"
			autoCapitalize="none"
			autoCorrect={false}
			placeholder="Password"
			value={ password }
			onChangeText={(newValue) => setPassword(newValue) }
			/>
			<Text>
This is my password {password}
			</Text>
			{password.length <= 5 ? <Text> Password must be longer than 5 characters </Text> : null}
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