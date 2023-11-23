import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/**html tags starts with small
 * React native tags start with capital
 * file name and default component name should exactly match
 * props can be considered as attributes in html
 * <img src="" width=""/>
 */
export default function App() {
  const [mystate, SetMyState] = useState(0);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("my-key2", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        let jsonValue = JSON.parse(value);
        console.log(jsonValue.name);
      }
    } catch (e) {
      // error reading value
    }
  };
  storeData({ name: "abc" });
  getData();
  const myinputhandler = (text) => {
    console.log(text);
  };
  const stack = createNativeStackNavigator();
  function HomeScreen({ navigation }) {
    return (
      <>
        <Text>I am a home screen</Text>
        <Button
          onPress={() => {
            navigation.navigate("Details", { name: "kamran", age: 30 });
          }}
          title="Go to Details"
        ></Button>
      </>
    );
  }
  function DetailScreen({ route, navigation }) {
    let { name, age } = route.params;

    return (
      <>
        <Text>
          {name},{age}
        </Text>
        <Button
          title="update params"
          onPress={() => {
            navigation.setParams({ age: 35 });
          }}
        ></Button>
        <Button
          onPress={() => {
            navigation.navigate("Details");
          }}
          title="Go again to Details"
        ></Button>
        <Button
          onPress={() => {
            navigation.push("Details");
          }}
          color="orange"
          title="push Details"
        ></Button>
        <Button
          color="yellow"
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="go to Home Screen"
        ></Button>
        <Button
          color="yellow"
          onPress={() => {
            navigation.goBack();
          }}
          title="go back"
        ></Button>
        <Button
          color="green"
          onPress={() => {
            navigation.popToTop();
          }}
          title="Go to Top"
        ></Button>
        <Text>I am a Detail screen</Text>
      </>
    );
  }
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Details"
          initialParams={{ age: 30 }}
          component={DetailScreen}
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        ></stack.Screen>

        <stack.Screen
          name="Home"
          options={{ title: "Overview" }}
          component={HomeScreen}
          options={{
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

/**Greeting component */
/*function Greeting(props) {
  console.log(props);
  return <Text>Welcome User {props.name}</Text>;
}*/
