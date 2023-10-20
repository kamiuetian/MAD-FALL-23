import React from "react";
import { Text, TextInput, View } from "react-native";
import Greeting from "./components/Greeting";
import Lab4 from "./components/Lab4";
import Class1610 from "./components/Class1610";
import Class1910 from "./components/Class1910";
import Lab2010 from "./components/Lab2010";
/**html tags starts with small
 * React native tags start with capital
 * file name and default component name should exactly match
 * props can be considered as attributes in html
 * <img src="" width=""/>
 */
export default function App() {
  console.log("App compoent in called");
  const myinputhandler = (text) => {
    console.log(text);
  };
  return (
    /**background-color: */
    <>
      {/*<Lab4 />*/}
      {/*<Class1910 />*/}
      <Lab2010 />
    </>
  );
}

/**Greeting component */
/*function Greeting(props) {
  console.log(props);
  return <Text>Welcome User {props.name}</Text>;
}*/
