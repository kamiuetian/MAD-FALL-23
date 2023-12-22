import React from "react";
import axios from "axios";
function AxiosComponent(props) {
 /* userLogin();
  async function userLogin() {
    const baseUrl = "https://json-placeholder.mock.beeceptor.com";
    let loginResponse = await axios.post(`${baseUrl}/login`, {
      username: "michael",
      password: "success-password",
    });
    if(loginResponse)
    {

    }
    console.log(loginResponse);
  }*/

  axios
    .get(
      `https://subtitles-for-youtube.p.rapidapi.com/subtitles/%7BvideoId%7D.srt`
    )
    .then((response) => {
      let users = response.data;
      users.map((user) => console.log(user.userId));
    });

  return <></>;
}

export default AxiosComponent;
