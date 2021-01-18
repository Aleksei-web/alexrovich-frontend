import axios from "axios";
import React, { useState } from "react";
import { SERVER_URL } from "../../../config";

function LiceseSearch({ values, setValues }) {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchValue.length === 0 || category === '') {
      return
    }
    axios
      .post(`${SERVER_URL}/search/filters`, { category, searchValue })
      .then((res) => {
        setValues(res.data);
      });
  };

  const searchAll = (e) => {
    e.preventDefault();
    axios.get(`${SERVER_URL}/license`).then((res) => {
      setValues(res.data);
    });
  };

  return (
    <>
      <div className="centered-container">
        <form className="centered-container-form">
          <h3>Hайти</h3>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="search">Введите данные</label>
              <input
                values={searchValue}
                name="search"
                type="text"
                className="form-control"
                id="search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Категория</label>
              <select
                value={category}
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                className="form-control"
              >
                <option value="">Выберите категорию</option>
                <option value="inn">ИНН</option>
                <option value="nameCompany">Название компании</option>
                <option value="contactName">Контактное лицо</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>
        </form>
        <div className='d-flex'>
          <button onClick={handleSubmit} className="btn m-1 btn-outline-primary">
            Поиск
          </button>
          <button onClick={searchAll} className="btn m-1 btn-outline-primary">
            Показать все
          </button>
        </div>
      </div>
    </>
  );
}

export default LiceseSearch;
