import axios from "axios";
import React, { useEffect, useState } from "react";

const Axiosgetapi = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {userData.map(({ username }, item) => (
          <li key={item.id}>{username}</li>
        ))}
      </ul>
    </div>
  );
};
export default Axiosgetapi;
