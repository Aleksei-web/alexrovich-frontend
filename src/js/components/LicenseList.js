import axios from "axios";
import React, { useEffect, useState } from "react";
import LicenseListItem from "./LicenseListItem";
import LiceseSearch from "./LiceseSearch";

function LicenseList({ values, setValues, updateLicense }) {

  return (
    <div className="container">
      <LiceseSearch values={values} setValues={setValues} />
        <h1>Список лицензий!</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {values.length > 0 ? (
          values.map((value) => (
            <LicenseListItem
              updateLicense={updateLicense}
              key={value._id}
              values={value}
            />
          ))
        ) : (
          <h2>Лицензий нет</h2>
        )}
      </div>
    </div>
  );
}

export default LicenseList;
