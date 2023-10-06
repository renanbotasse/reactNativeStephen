import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const colorIncrement = 20;

  const setColor = (color, change) => {
    //  color === 'red, 'green', 'blue'
    // change === +20, -20
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', colorIncrement)}
        onDecrease={() => setColor('red', -1 * colorIncrement)}
        color="Red"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor('green', colorIncrement)}
        onDecrease={() => setColor('green', -1 * colorIncrement)}
        color="Green"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor('blue', colorIncrement)}
        onDecrease={() => setColor('blue', -1 * colorIncrement)}
        color="Blue"
      ></ColorCounter>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
