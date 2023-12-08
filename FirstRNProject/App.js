//import React, { useState } from "react";
//import { Text, TextInput, View, Button } from "react-native";
/*import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Device.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

/**html tags starts with small
 * React native tags start with capital
 * file name and default component name should exactly match
 * props can be considered as attributes in html
 * <img src="" width=""/>
 */
/*export default function App() {
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
}*/

/**Greeting component */
/*function Greeting(props) {
  console.log(props);
  return <Text>Welcome User {props.name}</Text>;
}*/

import React from "react";
import MyState from "./Context/MyAppstate";
import MyContextUser from "./components/MyContextUser";
import AxiosComponent from "./components/AxiosComponent";
function App(props) {
  return (
    <>
      <AxiosComponent />
    </>
  );
}

export default App;
