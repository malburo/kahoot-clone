/* eslint-disable no-param-reassign */
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access-token');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  error => Promise.reject(error.response || error.message),
);

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    if (error.response.status === 401) {
      // store.dispatch(logout());
    }
    return Promise.reject(error.response || error.message);
  },
);
export default axiosClient;
