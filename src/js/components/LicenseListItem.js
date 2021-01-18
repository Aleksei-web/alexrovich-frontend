import React from "react";
import { Link } from "react-router-dom";

function LicenseListItem({ values }) {
  const {
    _id,
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
    <div className="col p-1">
      <div className="card h-100">
        <ul className="list-group m-5px">
          <li className="list-group-item">ИНН: {inn}</li>
          <li className="list-group-item">Название Kомпании: {nameCompany}</li>
          <li className="list-group-item">Продукт: {product}</li>
          <li className="list-group-item">
            Колличество пользователей: {numberOfUsers}
          </li>
          <li className="list-group-item">Дата начала действия: {startDate}</li>
          <li className="list-group-item">Дата окончания действия: {expiry}</li>
          <li className="list-group-item">Сонтактное имя: {contactName}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Комментарий: {comment}</li>
          <li className="list-group-item">
            <Link
              to={`/admin/license/updadate/${_id}`}
              className="btn btn-outline-success"
            >
              Изменить
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LicenseListItem;
