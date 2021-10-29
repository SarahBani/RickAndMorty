import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { SagaMiddleware } from 'redux-saga';

import { browserHistory } from '../browserHistory';


export default function configureStore(reducers: any, sagaMiddleware: SagaMiddleware): Store {
    const middleware = [
        sagaMiddleware,
        routerMiddleware(browserHistory),
    ];

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(browserHistory)
    });

    const composeEnhancers =
        (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
    );
}