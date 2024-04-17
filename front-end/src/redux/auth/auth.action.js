import { RESET_SELL } from "../sell/sell.type";
import { loginAPI, signAPI, aLoginAPI } from "./auth.api";
import * as types from "./auth.type";

export const Signin = (payload) => async (dispatch) => {
  try {
    await signAPI(payload);
    dispatch({ type: types.SIGNUP });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ERROR, payload: err.response.data.error });
  }
};

export const Log = (payload) => async (dispatch) => {
  try {
    const res = await loginAPI(payload);
    // console.log(res);
    dispatch({ type: types.LOGIN, payload: res });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ERROR, payload: err.response.data.error });
  }
};

export const AdminLog = (payload) => async (dispatch) => {
  try {
      // Call the login API with the provided payload
      const data = await aLoginAPI(payload);

      // Dispatch an action indicating successful login
      dispatch({ type: types.ADMIN_LOGIN, payload: data });
  } catch (err) {
      // Log any errors that occur during the login process
      console.log(err);
  }
};

export const authLogout = () => (dispatch) => {
  dispatch({ type: types.RESET_AUTH });
  dispatch({type:RESET_SELL})
};
