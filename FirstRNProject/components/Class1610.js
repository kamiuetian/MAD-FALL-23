import React from "react";
import {
  Button,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from "react-native-fontawesome";
function Class1610(props) {
  return (
    <View>
      <Button
        title="Press Me"
        onPress={() => {
          console.log("Button Pressed");
        }}
        style={{ backgroundColor: "yellow" }}
        color="red"
        wi
      ></Button>
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "green",
            minHeight: 50,
            alignItems: "center",
          }}
        >
          <Text>Press Me</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "blue",
            minHeight: 50,
            alignItems: "center",
          }}
        >
          <FontAwesome icon={SolidIcons.addressCard}></FontAwesome>
          <Text>Press Me</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={() => {
          console.log("View Clicked");
        }}
      >
        <View style={{ backgroundColor: "yellow" }}>
          <Text>This is Text Inside Button </Text>
        </View>
      </TouchableHighlight>

      <Pressable
        onPressIn={() => {
          console.log("OnPressIn called");
        }}
        onPressOut={() => {
          console.log("OnPressOut called");
        }}
        onPress={() => {
          console.log("OnPress called");
        }}
        onLongPress={() => {
          console.log("OnLongPress called");
        }}
      >
        <Text>Achieve the Long Press</Text>
      </Pressable>
    </View>
  );
}

export default Class1610;
