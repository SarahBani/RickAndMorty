import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

const HttpErrorHandler = (axios: AxiosInstance): [string | null, (() => void)] => {

    const [error, setError] = useState<string | null>(null);

    const reqInterceptor = axios.interceptors.request.use(
        req => {
            setError(null);
            return req;
        });

    const resInterceptor = axios.interceptors.response.use(
        res => res,
        err => {
            setError(err);
        }
    );

    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        }
    }, [reqInterceptor, resInterceptor, axios]);

    const clearError = (): void => {
        setError(null);
    }

    return [error, clearError];
};

export default HttpErrorHandler;