import * as React from "react";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from "../../../store";
import * as actions from '../../../store/actions/rickAndMortyActions';
import { Character } from "../../../models/Character.model";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { NoCharacter } from "../NoCharacter/NoCharacter";
import { Episode } from "../../../models/Episode.model";
import ListFooter from "../../UI/ListFooter/ListFooter";

interface StoreProps {
    characters: Character[],
    count: number,
    pagesCount: number,
    episodes: Episode[]
};

export const CharacterList: FC = () => {

    const { characters, count, pagesCount, episodes }: StoreProps = useSelector((state: AppState) => ({
        characters: state.rickAndMorty.characters,
        count: state.rickAndMorty.charactersCount,
        pagesCount: state.rickAndMorty.charactersPagesCount,
        episodes: state.rickAndMorty.episodes,
    }));
    const dispatch = useDispatch();

    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        if (episodes.length === 0) {
            dispatch(actions.fetchEpisodes());
        }
    }, []);

    useEffect(() => {
        if (characters.length === 0) {
            dispatch(actions.fetchCharacters(pageNo));
        }
    }, [pageNo]);
    
    const changePageHandler = useCallback((no: number) => {
        setPageNo(no);
    }, [setPageNo]);
    
    const getFirstEpisodeName = useCallback((character: Character): string => {        
        const episodeUrl: string = character.episode[0];
        return episodes.find(q => q.url === episodeUrl)?.name ?? '';
    }, [episodes]);

    const characterItems = useMemo(() => {
        if (characters && episodes) {
            return characters?.map((character: Character) =>
                <CharacterItem key={character.id} character={character} 
                    lastSeenEpisodeName={getFirstEpisodeName(character)} />);
        }
    }, [characters, episodes]);

    const listfooterContent = useMemo(() => (
        <ListFooter listCount={count} pageNo={pageNo} pagesCount={pagesCount} 
            onChangePage={changePageHandler} />
    ), [count, pageNo, pagesCount, changePageHandler]);

    const listContent = (
        (characters?.length > 0) ?
            <>
                {characterItems}
            </>
            : <NoCharacter />
    );

    return (
        <div className="row">
            {listContent}
            {listfooterContent}
        </div>
    );
};
