import React from "react";
import { View } from "react-native";
function Lab4(props) {
  return (
    <View
      style={{
        flex: 1,
        maxHeight: 1000,
        flexWrap: "wrap",
        alignContent: "flex-start",
        flexDirection: "column",
        backgroundColor: "yellow",
      }}
    >
      <View
        style={{
          width: 50,
          flexGrow: 1,
          flexBasis: 50,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          width: "50%",
          flexGrow: 2,
          height: 50,
          backgroundColor: "green",
        }}
      ></View>
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
    </View>
  );
}
const styles=StyleSheet.create({
  
})
export default Lab4;
