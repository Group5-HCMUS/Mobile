import axios from "axios";
import { hungAPI } from "../../global/config/api-config";

export const apiGetProfile = (access_token) => {
  return axios.get(`${hungAPI}/api/client/v1/me`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const apiAddChild = (code, access_token) => {
  return axios.post(
    `${hungAPI}/api/client/v1/parent/child/${code}/connect`,
    null,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const apiGetListChild = (access_token) => {
  return axios.get(`${hungAPI}/api/client/v1/parent/child`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
