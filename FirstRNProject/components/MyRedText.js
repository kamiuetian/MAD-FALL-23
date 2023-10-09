import React from "react";
import { Text } from "react-native";

function MyRedText(props) {
  return <Text style={{ color: "red", padding: 20 }}>{props.children}</Text>;
}

export default MyRedText;
