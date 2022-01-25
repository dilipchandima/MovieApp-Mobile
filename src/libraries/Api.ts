import axios, { AxiosRequestConfig, Method } from 'axios';
import { BASE_URL, IS_DEV_APP } from '../Config';

interface IProps {
  action: string;
  method?: Method;
  params?: any;
}

const request = async ({ action, method = 'GET', params }: IProps) => {
  const url = `${BASE_URL}${action}`;
  const axiosRequestConfig: AxiosRequestConfig = {
    method,
    url: `${BASE_URL}${action}`,
    params,
  };

  if (IS_DEV_APP) {
    console.log(axiosRequestConfig);
  }

  const result = await axios(axiosRequestConfig);
  return result;
};

export default { request };
