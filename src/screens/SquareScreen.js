import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

//const reducer = (state, howToChangeStateObject) => {
const reducer = (state, action) => {
  //state === { red: number, green: number, blue: number }
  //action === { type: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    //never going to do : state.red = state.red - 15 (NEVER CHANGE DIRECTLY STATE)
    //return {  green: 0, blue: 0, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //const [state, dispatch] = renMyReducer(reducerFunction, initialStateObj);

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
        color="Red"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
        color="Green"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      ></ColorCounter>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
