import React, { useState } from "react";
import CreateLicenseForm from "../components/CreateLicenseForm";
import axios from "axios";
import { SERVER_URL } from "../../../config";
import { useHistory } from "react-router-dom";

const initialState = {
  inn: "",
  nameCompany: "",
  product: "",
  numberOfUsers: "",
  startDate: "",
  expiry: "",
  contactName: "",
  email: "",
  comment: "",
};

export const AdminCreateLicense = () => {
  const [values, setValues] = useState(initialState);

  const {} = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${SERVER_URL}/license`, { ...values }).then((res) => {
      history.push("/admin/license/list");
    });
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <CreateLicenseForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setValues={setValues}
          values={values}
        />
      </div>
    </>
  );
};
