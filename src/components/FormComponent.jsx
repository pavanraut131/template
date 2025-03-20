import React, { useState } from "react";
import Template from "./Template";
import Templatetwo from "./Templatetwo";

const FormComponent = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    jobtitle: "",
    department: "",
    phonenumber: "",
    officeno: "",
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
            <label htmlFor="jobtitle">job title</label>
            <input
              type="text"
              name="jobtitle"
              placeholder="Enter the JobTitle"
              value={formdata.jobtitle}
              onChange={handlechange}
            />
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              placeholder="Enter the JobTitle"
              value={formdata.department}
              onChange={handlechange}
            />
            <label htmlFor="phonenumber">Phone no.</label>
            <input
              type="phone"
              name="phonenumber"
              placeholder="Enter the Number"
              value={formdata.phonenumber}
              onChange={handlechange}
            />
            <label htmlFor="officeno">Telephone</label>
            <input
              type="phone"
              name="officeno"
              placeholder="Enter the Telephone"
              value={formdata.officeno}
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
