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
};;