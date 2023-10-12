import React from "react";
import { StyleSheet, View } from "react-native";
import styles from "./styles";
import MyRedText from "./MyRedText";
function Lab4(props) {
  return (
    <View style={styles.view1}>
      <View style={{ ...styles.view2, ...{ backgroundColor: "grey" } }}></View>{" "}
      {/**red */}
      <View
        style={[{ width: 100, backgroundColor: "blue" }, styles.view2]}
      ></View>{" "}
      {/**gree */}
      <View style={styles.view2}></View>
      {/**blue */}
      <MyRedText>This is red text</MyRedText>
      <MyRedText style={{ fontWeight: "bold" }}>
        This is red and boldtext
      </MyRedText>
    </View>
  );
}

export default Lab4;
