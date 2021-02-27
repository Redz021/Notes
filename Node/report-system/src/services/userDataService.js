// import http from '../http-common';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/api';

axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers.authorization = localStorage['token'];
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // Do something before response is sent
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

class userDataService {
  login(data) {
    return axios.post('/user/login', data);
  }
  validate() {
    return axios.post('/validate');
  }
  logout(data) {
    return axios.post('/logout', data);
  }
}

export default new userDataService();
