import * as TYPES from "../types/user";
import axios from "axios";
import { SERVER_URL } from "../../../../config";

export const add_user = (name) => ({
  type: TYPES.ADD_USER,
  payload: name,
});

export const delete_user = () => ({
  type: TYPES.DELETE_USER,
  payload: null,
});

export const add_users_thunk = (name, password) => (dispatch, getState) => {
  axios
    .post(`${SERVER_URL}/login`, { name, password })
    .then((res) => {
      if (res.data.user) {
        console.log("res data", res.data);
        dispatch(add_user(res.data.user));
        window.localStorage.setItem('user', res.data.user)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
