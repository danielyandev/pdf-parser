import axios from "axios";
import store from "../store"

export default function setupAxios() {

  axios.interceptors.request.use((request: any) => {
    if (!request.headers.Authorization && !request.headers.authorization) {
      request.headers.Authorization = 'Bearer ' + store.getState().auth.access_token;
    }
    return request;
  });

}