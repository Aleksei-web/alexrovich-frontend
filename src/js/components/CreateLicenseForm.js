import React from "react";

function CreateLicenseForm({ handleSubmit, handleChange, setValues, values }) {
  const {
    inn,
    nameCompany,
    product,
    numberOfUsers,
    startDate,
    expiry,
    contactName,
    email,
    comment,
  } = values;

  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={handleSubmit} className="centered-container-form">
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="inn">ИНН Клиента</label>
              <input
                type="number"
                name="inn"
                id="inn"
                value={inn}
								onChange={handleChange}
                className="form-control"
              />
							<div className="invalid-feedback">
                Введите номер ИНН
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="nameCompany">Название компании</label>
              <input
                type="text"
                id="nameCompany"
                name="nameCompany"
                className="form-control"
                value={nameCompany}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="product">Программный продукт</label>
              <input
                type="text"
                id="product"
                name="product"
                className="form-control"
                value={product}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfUsers">Колличество пользователей</label>
              <input
                type="number"
                id="numberOfUsers"
                name="numberOfUsers"
                className="form-control"
                value={numberOfUsers}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Дата начала действия лицензии</label>
              <input
                name="startDate"
                type="date"
                id="startDate"
                className="form-control"
                value={startDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Дата окончания действия лицензии</label>
              <input
                name="expiry"
                type="date"
                id="expiry"
                className="form-control"
                value={expiry}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactName">Контактное лицо клиента</label>
              <input
                name="contactName"
                type="text"
                className="form-control"
                id="contactName"
                value={contactName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Комментарий</label>
              <input
                name="comment"
                type="text"
                className="form-control"
                id="comment"
                onChange={handleChange}
                value={comment}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLicenseForm;
