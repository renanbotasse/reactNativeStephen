import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
<View style={styles.viewOneStyle}></View>
<View style={styles.viewTwoStyle}></View>
<View style={styles.viewThreeStyle}></View>

    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
	borderWidth: 3,
	borderColor: 'black',
	height: 200,
	flexDirection: 'row',
	justifyContent: 'space-between'
    // borderWidth: 6,
    // borderColor: "black",
    // //alignItems: 'center', //'flex-end' 'flex-start' 'stretch' 'center'
    // //flexDirection: 'row', // 'row' 'column'
    // //justifyContent: 'space-around',// 'flex-start' 'center' 'flex-end' 'space-between' 'space-around'
    // height: 200,
    //flexDirection: 'row'
  },
  viewOneStyle: {
	height: 50,
	width: 50,
	backgroundColor: 'red',
    // borderWidth: 6,
    // flex: 1,
    // borderColor: "red",
	//alignSelf: 'flex-start'
  },
  viewTwoStyle: {
	height: 50,
	width: 50,
	backgroundColor: 'green',
	top: 50 //marginTop: 50 //alignSelf: 'flex-end' // or add a view parent and change by the view parent

    // borderWidth: 6,
    // flex: 1,
    // borderColor: "red",
    // //alignSelf: "center", // 'flex-end' 'center' 'flex-start'
	// position: 'absolute', // 'relative' 'absolute'
	//top bottom left right = after everything are on the final position, you can change a little bit the position using this
	//top: 0,
	//left: 0,
	//bottom: 0,
	//right: 0
	// ...StyleSheet.absoluteFillObject // = top 0 left 0 bottom 0 right 0 Sometimes you may want absoluteFill but with a couple tweaks - absoluteFillObject can be used to create a customized entry in a StyleSheet, e.g.: const styles = StyleSheet.create({ wrapper: { ...StyleSheet.absoluteFillObject, top: 10, backgroundColor: 'transparent', }, });
  },
  viewThreeStyle: {
	height: 50,
	width: 50,
	backgroundColor: 'blue',
    // borderWidth: 6,
    // flex: 1,
    // borderColor: "red",
	// //right: 200
	//alignSelf: 'flex-end'
  },
});

export default BoxScreen;
