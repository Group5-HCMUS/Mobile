import axios from "axios";
import { hungAPI } from "../../global/config/api-config";
export const apiLogin = (username, password) => {
  return axios.post(`${hungAPI}/oauth/token`, {
    username,
    password,
    grant_type: "password",
    client_id: "2",
    client_secret: "g5EFI6OdXEOUodgjIym0aDupgL0w8MSwKEFg461h",
  });
};

