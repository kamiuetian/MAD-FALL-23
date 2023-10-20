import React, { useState } from "react";
import { TextInput, Text } from "react-native";

function Lab2010(props) {
  console.log("Lab2010 compoent in called");
  //let userInput = "";
  /**
   * returns array with 2 values
   * 0 -> state variable
   * 1-> callback function to update state variable
   */
  let [userInput, setUserInput] = useState({ name: "Kamran", password: 123 });
  const onChangeTextHandler = (text) => {
    //userInput = text;
    setUserInput({ ...userInput, password: text });
    console.log(userInput);
  };
  return (
    <>
      <TextInput
        placeholder="User Input"
        onChangeText={onChangeTextHandler}
      ></TextInput>
      <Text>User entered: {userInput.password}</Text>
    </>
  );
}

export default Lab2010;
