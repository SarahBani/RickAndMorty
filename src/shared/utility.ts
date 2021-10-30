import * as Constants from "./constants";
import { HttpErrorEnum } from "./enums";

export const updateObject = <T>(oldObject: T, updatedProperties: any) => {
    return {
        ...oldObject,
        updatedProperties
    };
};

export const getErrorMessage = (error: HttpErrorEnum): string => {
    switch (error) {
        case HttpErrorEnum.BadRequest:
            return Constants.ERROR_BAD_REQUEST;
        case HttpErrorEnum.BadGateway:
            return Constants.ERROR_BAD_GATEWAY;
        case HttpErrorEnum.NotFound:
        case HttpErrorEnum.InternalServerError:
        default:
            return Constants.ERROR_UNKNOWN;
    }
};

export const getHeaders = () => ({
    'Content-Type': 'application/json; charset=utf-8',
});

export const getIdFromUrl = (url: string): number => {       
     return +url.substr(url.lastIndexOf('/') + 1);
};