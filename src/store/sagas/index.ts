import { all, takeLatest, cancel, take, fork } from 'redux-saga/effects';

import { fetchCharactersSaga, fetchCharacterSaga, fetchEpisodesSaga } from './rickAndMorty';
import * as rickAndMortyActionTypes from '../actions/rickAndMortyActionTypes';

export function* watchRickAndMorty() {
    yield all([
        takeLatest(rickAndMortyActionTypes.FETCH_CHARACTERS, fetchCharactersSaga),
        takeLatest(rickAndMortyActionTypes.FETCH_CHARACTER, fetchCharacterSaga),
        // takeLatest(rickAndMortyActionTypes.FETCH_LOCATIONS, fetchLocationsSaga),
        takeLatest(rickAndMortyActionTypes.FETCH_EPISODES, fetchEpisodesSaga),
        // takeLatest(rickAndMortyActionTypes.FETCH_EPISODE, fetchEpisodeSaga),
    ]);
}

function* cancelWorkerSaga(task: any) {
    yield cancel(task);
}