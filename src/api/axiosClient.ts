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
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
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
      // store.dispatch(actions.logout());
    }
    return Promise.reject(error);
  },
);
export default axiosClient;