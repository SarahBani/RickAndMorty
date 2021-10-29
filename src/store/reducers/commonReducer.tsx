import * as actionTypes from '../actions/commonActionTypes';

export interface State {
    isLoading: boolean,
    loaderCount: number,
    error: string | null
}

const initialState: State = {
    isLoading: false,
    loaderCount: 0,
    error: null
};

const commonReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.RESET_LOADER:
            return {
            ...state,
            loaderCount: 0,
            isLoading: false,
        };
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                isLoading: true,
                loaderCount: Math.max(state.loaderCount + 1, 1),
                error: null
            };
        case actionTypes.HIDE_LOADER:
            console.warn('hide loaderrrrrrr');
            console.warn(state.loaderCount);
            return {
                ...state,
                isLoading: (state.loaderCount > 1),
                loaderCount: Math.max(state.loaderCount - 1, 0),
            };
        case actionTypes.RAISE_ERROR:
            return {
                ...state,
                isLoading: (state.loaderCount > 1),
                loaderCount: Math.max(state.loaderCount - 1, 0),
                error: action.error
            };
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

 export default commonReducer;