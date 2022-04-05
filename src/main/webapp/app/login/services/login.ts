import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/api/authenticate';

export const login = ({ username, password, rememberMe }: LoginModalDataType) => {
  return axios
    .post(LOGIN_URL, {
      username,
      password,
      rememberMe,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
