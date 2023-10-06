import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const NUMBER = 1;

const reducer = (state, action) => {
  //state === { counter: number}
  //action === { type: 'increase' || 'decrease', payload: 1 } 
  switch(action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
      //return { ...state, counter: state.counter + 1 };
      
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
      //return { ...state, counter: state.counter - 1 };
      
      default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch ({ type: 'increase', payload: NUMBER})}
     />
      <Button
        title="Decrease"
        onPress={() => dispatch ({ type: 'decrease', payload: NUMBER})}
      />

      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
