import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import usercontext from "../Context/MyAppcontext";
function MyContextUser(props) {
  const { name, updateName } = useContext(usercontext);
  useEffect(() => {
    setTimeout(() => {
      updateName();
    }, 1000);
  }, []);
  return (
    <>
      <Text>{name}</Text>
    </>
  );
}

export default MyContextUser;
