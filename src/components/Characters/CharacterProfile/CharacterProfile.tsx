import * as React from "react";
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import classes from './CharacterProfile.module.scss';
import * as actions from '../../../store/actions/rickAndMortyActions';
import { AppState } from '../../../store';
import { Character } from "../../../models/Character.model";
import { Location } from "../../../models/Location.model";
import { Episode } from "../../../models/Episode.model";
import { getIdFromUrl } from "../../../shared/utility";

interface StoreProps {
    character: Character,
    episodes: Episode[]
};

export const CharacterProfile: FC = () => {
    
    const { character, episodes }: StoreProps =
        useSelector((state: AppState) => ({
            character: state.rickAndMorty.selectedCharacter,
            episodes: state.rickAndMorty.episodes,
        }));
    const dispatch = useDispatch();

    const { id }: any = useParams();
    
    const [redirect, setRedirect] = useState<ReactElement>();

    useEffect(() => {
        if (episodes.length === 0) {
            dispatch(actions.fetchEpisodes());
        }
        return () => { // cleanup
            dispatch(actions.clearSelectedCharacter());  
        }      
    }, []);

    useEffect(() => {
        // if (!character || character.id !== id) {
        dispatch(actions.fetchCharacter(id));
        // }
    }, [id]);

    const getLocationContent = useCallback((location: Location) => 
        `${location.name} - ${location.dimension} - ${location.residentsCount} Residents`
    , []);

    const originContent = useMemo(() => {
        if (character) {
            return getLocationContent(character!.origin);
        }
   }, [character]);

   const locationContent = useMemo(() => {
       if (character) {
           return getLocationContent(character!.location);
       }
    }, [character]);   

    const episodeNames = useMemo(() => {
        if (!!character && episodes.length > 0) {
            return character?.episode.map(q => {
                const episodeId: number = getIdFromUrl(q);
                const episodeName: string = episodes.find(q => q.id === episodeId)!.name;
                return (<li key={episodeId}>{episodeName}</li>);
            });
        }
        return null;
   }, [character, episodes]);

    const cancelHandler = useCallback(() => {
        setRedirect(<Redirect to="/" />);
    }, [setRedirect]);

    const characterContent = character && (
        <div>
        <section>
            <img src={character?.image} alt="avatar" className="img-response" />
            <div>   
                <h1>{character?.name}</h1>                 
                <strong className={classes[character?.status.toLowerCase()]}>
                        {character?.status} - {character?.species}
                </strong>
            </div>
        </section>
        <section>   
            <div>
                <b>Gender: </b>
                <span>{character?.gender}</span>
            </div> 
            <div>
                <b>Origin: </b>
                <span>{originContent}</span>
            </div>   
            <div>
                <b>Last known location: </b>
                <span>{locationContent}</span>
            </div>   
        </section>
        <section>                    
            <div>
                <b>Episodes: </b>
                <ul>
                {episodeNames}
                </ul>
            </div> 
        </section>
    </div>
    );

   return (
        <div className={["container", classes.CharacterProfile].join(' ')}>
            {redirect}
            {characterContent}
            <div className="text-center">
                <button className="btn btn-dark" type="button" onClick={cancelHandler}>
                    Back
                </button>
            </div>
        </div>
    );
};
