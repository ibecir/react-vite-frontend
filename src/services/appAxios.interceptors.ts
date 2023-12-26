import appAxios from './appAxios';
import { toast } from 'react-toastify';

export const configureAxiosInterceptors = () => {
    appAxios.interceptors.response.use(undefined, (error) => {
        console.log("ERROR IS ", error);

        const status = (error.response || {}).status;
        if (status === 401) {
            // Do nothing
        } else {
            error.handleGlobally = errorHandler(error);
        }
        return Promise.reject(error);
    });
    appAxios.interceptors.request.use(async (config) => {
        const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiZWNpckBiZWNpci5jb20iLCJpYXQiOjE3MDM1MjE2ODYsImV4cCI6MTcwMzUyMzEyNn0.nXrBPlAyJnbZd-VVFBtkgxR3kHBw68vGh8a9FCbAQnw";
        config.headers.Authorization = token;
        return config;
    });
};

const errorHandler = (error) => {
    return () => {
        if (error.customMessage) {
            toast.error(error?.customMessage);
        } else {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                toast.error(
                    error.response.data.message ||
                    error.message ||
                    'Unknownk error ocured');
            } else {
                console.log('Error', error);
                // Something happened in setting up the request that triggered an Error
                toast.error('Network Error! Please check internet connection');
            }
        }
    };
};