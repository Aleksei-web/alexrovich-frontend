import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER_URL } from "../../../config";
import LicenseList from "../components/LicenseList";

function LicenseAll() {
	const [values, setValues] = useState([]);
	
	const history = useHistory()

  useEffect(() => {
    axios.get(`${SERVER_URL}/license`).then((res) => {
      console.log(res.data);
      setValues(res.data);
    });
  }, []);

  const updateLicense = (e, id) => {
		e.preventDefault();
		history.push(`admin/license/updadate/${id}`)
		console.log(id);
  };

  return (
    <LicenseList
      values={values}
      updateLicense={updateLicense}
      setValues={setValues}
    />
  );
}

export default LicenseAll;
