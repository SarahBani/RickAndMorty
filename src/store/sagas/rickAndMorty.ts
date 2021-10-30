import { put, call } from 'redux-saga/effects';

import * as actions from '../actions/rickAndMortyActions';
import * as commonActions from '../actions/commonActions';
import { ResponseGenerator } from '../../models/ResponseGenerator.model';
import axiosInstance from '../../shared/axios-instance';
import { getHeaders } from '../../shared/utility';
import { ResponseData } from '../../models/ResponseData.model';
import { Character } from '../../models/Character.model';
import { Location } from '../../models/Location.model';
import { Episode } from '../../models/Episode.model';

export function* fetchCharactersSaga(payload: ReturnType<typeof actions.fetchCharacters>) {
    yield put(commonActions.showLoader());
    try {
        const filters = [];
        if (payload.pageNo) {
            yield filters.push(`page=${payload.pageNo}`);
        }
        const queryString: string = yield (filters.length > 0 ? '?' + filters.join('&') : '');
        const response: ResponseGenerator = yield axiosInstance.get('/character' + queryString,
        {
            headers: getHeaders()
        });
        if (response?.status === 200) {
            const data: ResponseData<Character> = response.data;
            yield put(actions.setCharacters(data.results, data.info.count, data.info.pages));
        }
        yield put(commonActions.hideLoader());
    } catch (error: any) {
        yield put(commonActions.raiseError(error));
    }
}

export function* fetchCharacterSaga(payload: ReturnType<typeof actions.fetchCharacter>) {
    yield put(commonActions.showLoader());    
    try {
        const response: ResponseGenerator = yield axiosInstance.get('/character/' + payload.id,
        {
            headers: getHeaders()
        });
        if (response?.status === 200) {
            const character: Character = response.data;        
            if (character.origin) {
                const origin: Location = yield call(fetchLocationSaga, character.origin.url);
                character.origin = origin;
            }   
            if (character.location) {
                const location: Location = yield call(fetchLocationSaga, character.location.url);
                character.location = location;
            }
            yield put(actions.setCharacter(character));
            
            // response = yield axiosInstance.get('/character/' + payload.id,
            // {
            //     headers: getHeaders()
            // });
            // const episodeNames: string[] = yield character.episode.map(q => {
            //     const episodeId: number = getIdFromUrl(q);
            //     return call(fetchEpisodeNameSaga, episodeId);
            // });
            // const episodeIds: number[] = yield character.episode.map(q => {
            //     return getIdFromUrl(q);
            // });
            // const episodeNames: string[] = yield all(episodeIds.map(q => call(fetchEpisodeNameSaga, q)));
            // character.episodeNames = episodeNames;
        }
        yield put(commonActions.hideLoader());
    } catch (error: any) {
        yield put(commonActions.raiseError(error));
    }
}

function* fetchLocationSaga(url: string)
{
    const response: ResponseGenerator = yield axiosInstance.get(url,
    {
        headers: getHeaders()
    });
    if (response?.status === 200) {
        const location = response.data;
        location.residentsCount = response.data.residents?.length ?? 0;
        return location;
    }
    return null;
}

export function* fetchEpisodesSaga(payload: ReturnType<typeof actions.fetchEpisodes>) {
    yield put(commonActions.showLoader());
    try {
        const episodes: Episode[] = [];
        let data: ResponseData<Episode>;
        let pageNo: number = 0;
        do {
            pageNo++;
            let response: ResponseGenerator = yield axiosInstance.get('/episode?page=' + pageNo,
            {
                headers: getHeaders()
            });
            if (response?.status !== 200)
            {
                break;
            }
            data = response.data;
            episodes.push(...data.results);
        } while(pageNo < data.info.pages);
        yield put(actions.setEpisodes(episodes));
        yield put(commonActions.hideLoader());
    } catch (error: any) {
        yield put(commonActions.raiseError(error));
    }
}