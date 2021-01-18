import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER_URL } from "../../../config";
import CreateLicenseForm from "../components/CreateLicenseForm";

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

function UpdateLicense({ match }) {
  const [values, setValues] = useState(initialState);

  const { id } = match.params;

  const history = useHistory()

  useEffect(() => {
    axios.get(`${SERVER_URL}/license/${id}`).then((res) => {
      setValues({ ...res.data });
    });
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_URL}/license/update/${id}`, { ...values })
      .then((res) => {
        history.push("/admin/license/list");
      });
  };

  return (
    <div className="contaner">
      <h2>Изменить лицензию</h2>
      <CreateLicenseForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
    </div>
  );
}

export default UpdateLicense;
