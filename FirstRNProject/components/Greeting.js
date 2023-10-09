import { Text, View } from "react-native";
import MyRedText from "./MyRedText";
export default function Greeting({ name }) {
  /* let { name, age, session } = props;
  let arr = [1, 2, 3, 4];
  let [a, b, c, d] = arr;*/
  return (
    <View>
      I am in View
      <Text style={{ color: "white" }}>Welcome User {name}</Text>
      {/*<Text style={{ color: "white" }}>I am a dummy</Text>*/}
      <MyRedText>
        I am a dummy <Text style={{ color: "black" }}>Text</Text>
      </MyRedText>
    </View>
  );
}
