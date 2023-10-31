import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";

function Lab2710({ test }) {
  // console.log("component redered");
  /*//first case with dependencies
  useEffect(() => {
    console.log("UseEffect in Lab2710 is called");
  });*/
  /*//2nd case where we provide empty list of dependcies
  useEffect(() => {
    console.log("UseEffect in Lab2710 is called");
  }, []);*/
  useEffect(() => {
    console.log("UseEffect in Lab2710 is called");
  }, [test]);

  return (
    <>
      <Button
        title="increment"
        onPress={() => {
          SetMyState(mystate + 1);
        }}
      ></Button>
      <Text>{test}</Text>
    </>
  );
}

export default Lab2710;
