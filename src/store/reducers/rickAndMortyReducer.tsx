import { Character } from '../../models/Character.model';
import { Episode } from '../../models/Episode.model';
import * as actionTypes from '../actions/rickAndMortyActionTypes';

export interface State {
    characters: Character[],
    charactersCount: number,
    charactersPagesCount: number,
    selectedCharacter: Character | null,
    episodes: Episode[]
}

const initialState: State = {
    characters: [],
    charactersCount: 0,
    charactersPagesCount: 0,
    selectedCharacter: null,
    episodes: [],
};

export const rickAndMortyReducer = (state: State = initialState, payload: any): any => {
    switch (payload.type) {
        case actionTypes.SET_CHARACTERS:
            return {
                ...state,
                characters: payload.characters,
                charactersCount: payload.count,
                charactersPagesCount: payload.pagesCount
            };
        case actionTypes.SET_CHARACTER:
            return {
                ...state,
                selectedCharacter: payload.character
            };
        case actionTypes.CLEAR_SELECTED_CHARACTER:
            return {
                ...state,
                selectedCharacter: null
            }; 
        case actionTypes.SET_EPISODES:
            return {
                ...state,
                episodes: payload.episodes
            };
        default:
            return state;
    }
};

export default rickAndMortyReducer;