import React from "react";

function Lec0910(props) {
  return (
    <>
      <TextInput
        placeholder="UserName"
        multiline={true}
        onChangeText={myinputhandler}
      ></TextInput>
      <TextInput
        onChangeText={(txt) => {
          console.log(txt);
        }}
      ></TextInput>
      <Greeting name="ALi" age="30" />
      <Greeting name="Qasim" age="30" />
    </>
  );
}

export default Lec09 - 10;
