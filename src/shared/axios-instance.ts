import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { HttpErrorEnum } from './enums';
import { getErrorMessage } from './utility';
import * as Constants from "./constants";

// const cancelSource = axios.CancelToken.source();

const axiosInstance: AxiosInstance = axios.create({
    baseURL: Constants.GATEWAY_URL
});

const redundantErrorMessage = 'Error: Request failed with status code ';

axiosInstance.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
    return requestConfig;
}, (error: any) => {
    // console.log('axiosInstance request error');
    // console.log(error);
    const httpErrorMessage: string = getHttpErrorMessage(error);
    // console.log(httpErrorMessage);
    return Promise.reject(httpErrorMessage);
});

axiosInstance.interceptors.response.use((responseConfig: AxiosResponse) => {
    return responseConfig;
}, (error: any) => {
    // console.log('axiosInstance response error');
    // console.log(error);
    const httpErrorMessage: string = getHttpErrorMessage(error);
    // console.log(httpErrorMessage);
    return Promise.reject(httpErrorMessage);
});

const getHttpErrorMessage = (error: any): string => {    
    const errorCode: number = parseInt(error.toString().replace(redundantErrorMessage, ''));
    const httpError: HttpErrorEnum = errorCode as HttpErrorEnum;
    return getErrorMessage(httpError);
};

export default axiosInstance;