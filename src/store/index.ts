import createSagaMiddleware from 'redux-saga';

import commonReducer, * as Common from './reducers/commonReducer';
import rickAndMortyReducer, * as RickAndMorty from './reducers/rickAndMortyReducer';
import configureStore from './configureStore';
import { watchRickAndMorty } from './sagas';

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
const reducers = {
    common: commonReducer,
    rickAndMorty: rickAndMortyReducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => AppState): void;
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore(
    reducers,
    sagaMiddleware
);

sagaMiddleware.run(watchRickAndMorty);

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

