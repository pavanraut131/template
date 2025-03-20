import React, { useState } from "react";
import Template from "./Template";
import Templatetwo from "./Templatetwo";

const FormComponent = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [selectedtemp, setselectedtemp] = useState("temp1");
  function handlechange(e) {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  console.log(formdata);
  return (
    <>
      <div>
        <h1>Fill the details</h1>

        <div>
          <form>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter the Firstname"
              value={formdata.firstname}
              onChange={handlechange}
            />
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter the Lastname"
              value={formdata.lastname}
              onChange={handlechange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter the email"
              value={formdata.email}
              onChange={handlechange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the Password"
              value={formdata.password}
              onChange={handlechange}
            />
          </form>
        </div>
        <div>
          <button onClick={() => setselectedtemp("temp1")}>
            Load template 1
          </button>
          <button onClick={() => setselectedtemp("temp2")}>
            Load template 2
          </button>
        </div>
        <div>
          {selectedtemp == "temp1" && <Template formdata={formdata} />}
          {selectedtemp == "temp2" && <Templatetwo formdata={formdata} />}
        </div>
      </div>
    </>
  );
};

export default FormComponent;
