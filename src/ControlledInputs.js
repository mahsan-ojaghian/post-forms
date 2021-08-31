import React, { useState } from "react";
import axios from "axios";

const ChildrenComponent = () => {
  const url =
    "https://my-react-database-default-rtdb.europe-west1.firebasedatabase.app/inputControlled.json";
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  });

  function inputHandler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submitHandler(e) {
    e.preventDefault();
    axios
      .post(url, {
        firstName: data.firstName,
        lastName: data.lastName
      })
      .then((response) => console.log(response.data));
  }

  return (
    <div>
      <h1>Controlled Inputs</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={data.firstName}
          onChange={(e) => inputHandler(e)}
          placeholder="First Name"
          id="firstName"
        />
        <br />
        <input
          type="text"
          value={data.lastName}
          onChange={(e) => inputHandler(e)}
          placeholder="Last Name"
          id="lastName"
        />
        <button>Submit form</button>
      </form>
    </div>
  );
};
export default ChildrenComponent;
