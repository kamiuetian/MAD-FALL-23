import React, {useState} from "react";
import { Text, TextInput, View, Button } from "react-native";
import Greeting from "./components/Greeting";
import Lab4 from "./components/Lab4";
import Class1610 from "./components/Class1610";
import Class1910 from "./components/Class1910";
import Lab2010 from "./components/Lab2010";
<<<<<<< HEAD
<<<<<<< HEAD
import Class2610 from "./components/Class2610";
import Lab2710 from "./components/Lab2710";
=======
>>>>>>> parent of 877d3d4 (Mid Term Lab)
=======
>>>>>>> parent of 877d3d4 (Mid Term Lab)
/**html tags starts with small
 * React native tags start with capital
 * file name and default component name should exactly match
 * props can be considered as attributes in html
 * <img src="" width=""/>
 */
export default function App() {
  const [mystate, SetMyState] = useState(0);
  const myinputhandler = (text) => {
    console.log(text);
  };
  return (
    /**background-color: */
    <>
      {/*<Lab4 />*/}
      {/*<Class1910 />*/}
<<<<<<< HEAD
<<<<<<< HEAD
      {/*<Lab2010 />*/}
      {/*<Class2610 />*/}
      <Lab2710 test={mystate} />
      
      
=======
      <Lab2010 />
>>>>>>> parent of 877d3d4 (Mid Term Lab)
=======
      <Lab2010 />
>>>>>>> parent of 877d3d4 (Mid Term Lab)
    </>
  );
}

/**Greeting component */
/*function Greeting(props) {
  console.log(props);
  return <Text>Welcome User {props.name}</Text>;
}*/
