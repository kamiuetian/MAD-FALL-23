import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    maxHeight: 1000,
    flexWrap: "wrap",
    alignContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "yellow",
    
  },
  view2: {
    width: 50,
    flexGrow: 1,
    flexBasis: 50,
    backgroundColor: "red",
  },
});
export default styles;
