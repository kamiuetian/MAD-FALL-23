import React from "react";
import { Text } from "react-native";

function MyRedText(props) {
  const { children, style } = props;
  return (
    <Text style={{ color: "red", padding: 20, ...style }}>{children}</Text>
  );
}

export default MyRedText;
