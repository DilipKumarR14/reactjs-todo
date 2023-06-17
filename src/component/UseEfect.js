import React, { useEffect, useState } from "react";
import axios from "axios";

function Efect() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios
    .get("https://reqres.in/api/user")
    .then((result) => {
      setInfo(result.data.data[0].name);
      console.log(result.data);
    });
  }, []);

  return <div>Hello {info} </div>;
}
export default Efect;
