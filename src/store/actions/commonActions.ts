import * as actionTypes from './commonActionTypes';
import * as Constants from '../../shared/constants';

const unknownError = {
    message: Constants.ERROR_UNKNOWN
};

export const resetLoader = () => {
    return {
        type: actionTypes.RESET_LOADER
    };
};

export const showLoader = () => {
    return {
        type: actionTypes.SHOW_LOADER
    };
};

export const hideLoader = () => {
    return {
        type: actionTypes.HIDE_LOADER
    };
};

export const raiseError = (error = unknownError) => {
    return {
        type: actionTypes.RAISE_ERROR,
        error: error
    };
};

export const clearError = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    };
};