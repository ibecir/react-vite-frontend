import appAxios from './appAxios';
import { toast } from 'react-toastify';

export const configureAxiosInterceptors = () => {
    appAxios.interceptors.response.use(undefined, (error) => {
        console.log("ERROR HAPPENED AGAIN configureAxiosInterceptors ", error.response);
        const status = (error.response || {}).status;
        if (status === 401) {
            // Perform logout
            console.log("LOGOUT");
        } else {
            error.handleGlobally = errorHandler(error);
        }
        return Promise.reject(error);
    });
    appAxios.interceptors.request.use(async (config) => {
        const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiZWNpckBiZWNpci5jb20iLCJpYXQiOjE3MDM1OTY0MjksImV4cCI6MTcwMzU5Nzg2OX0.4Q0ocY8B201xbc76JNs0zrr8yrnMlpE7vug442m7ls0";
        config.headers.Authorization = token;
        return config;
    });
};

const errorHandler = (error) => {
    console.log("COMPONENT RERENDERED ERROR HAPPENED AGAIN errorHandler ", error.response);
    return () => {
        if (error?.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            toast.error(
                error?.customMessage ||
                error.response.data.message ||
                error.message ||
                'Unknown error ocured');
        } else {
            console.log('Error', error);
            // Something happened in setting up the request that triggered an Error
        }
    };
};