import axios from "axios";
import { hungAPI } from "../../global/config/api-config";

export const apiGetProfile = (access_token) => {
  return axios.get(`${hungAPI}/api/client/v1/me`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
