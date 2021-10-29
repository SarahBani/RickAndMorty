import * as actionTypes from './rickAndMortyActionTypes';
import { Character } from '../../models/Character.model';
import { Episode } from '../../models/Episode.model';

export const fetchCharacters = (pageNo: number | null = null) => {
    return {
        type: actionTypes.FETCH_CHARACTERS,
        pageNo: pageNo
    };
};

export const setCharacters = (characters: Character[], count: number, pagesCount:number) => {
    return {
        type: actionTypes.SET_CHARACTERS,
        characters: characters,
        count: count,
        pagesCount: pagesCount,
    };
};

export const fetchCharacter = (id: number) => {
    return {
        type: actionTypes.FETCH_CHARACTER,
        id: id
    };
};

export const setCharacter = (character: Character) => {
    return {
        type: actionTypes.SET_CHARACTER,
        character: character
    };
};

export const clearSelectedCharacter = () => {
    return {
        type: actionTypes.CLEAR_SELECTED_CHARACTER
    };
};

export const fetchEpisodes = () => {
    return {
        type: actionTypes.FETCH_EPISODES
    };
};

export const setEpisodes = (episodes: Episode[]) => {
    return {
        type: actionTypes.SET_EPISODES,
        episodes: episodes
    };
};

export const fetchLocation = (id: number) => {
    return {
        type: actionTypes.FETCH_LOCATION,
        id: id
    };
};

export const setLocation = (location: Location) => {
    return {
        type: actionTypes.SET_LOCATION,
        location: location
    };
};

// export const fetchEpisode = (id: number) => {
//     return {
//         type: actionTypes.FETCH_EPISODE,
//         id: id
//     };
// };

// export const setEpisode = (episode: Episode) => {
//     return {
//         type: actionTypes.SET_EPISODE,
//         episode: episode
//     };
// };