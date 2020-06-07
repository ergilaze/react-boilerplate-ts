import axios from 'axios';
import { getAuthData } from './tokenMgmt';

const apiUrl = process.env.REACT_APP_API_URL;

const getHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ''
  };

  const tokenData = JSON.parse(getAuthData());

  if (tokenData) {
    headers.Authorization = `${tokenData.token}`;
  }
  return headers;
};

const get = (url: string, params: {} = {}) => axios.get(url, {
  params,
  headers: getHeaders(),
});

const post = (url: string, params: {} = {}, additionalHeaders: {} = {}) => axios.post(url, params, {
  headers: Object.assign(getHeaders(), additionalHeaders),
});

const put = (url: string, params: {} = {}, additionalHeaders: {} = {}) => axios.put(url, params, {
  headers: Object.assign(getHeaders(), additionalHeaders),
});

const patch = (url: string, params: {} = {}, additionalHeaders: {} = {}) => axios.patch(url, params, {
  headers: Object.assign(getHeaders(), additionalHeaders),
});

const remove = (url: string, data: {} = {}) => axios.delete(url, {
  data: JSON.stringify({ data }),
  headers: getHeaders(),
});

export {
  get,
  post,
  put,
  patch,
  remove,
  getHeaders,
  apiUrl,
};
