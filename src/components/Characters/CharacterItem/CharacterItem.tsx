import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import * as classes from './CharacterItem.module.scss';
import { Character } from '../../../models/Character.model';
import * as Constants from '../../../shared/constants';

interface Props {
    character: Character,
    lastSeenEpisodeName: string
}

export const CharacterItem: FC<Props> = ({ character, lastSeenEpisodeName }) => {
    return (    
        <div className={["col-12","col-lg-6", classes.CharacterItem].join(' ')}>
            <article>
                <img src={character.image} className="img-response" />
                <section>
                    <div>
                        <h2>
                            <Link
                                to={`Character/${character.id}`}>
                                <strong className="list-group-item-heading">{character.name}</strong>
                            </Link>
                        </h2>
                        <strong className={classes[character.status.toLowerCase()]}>
                            {character.status} - {character.species}
                        </strong>
                    </div>
                    <div>
                        <b>Last known location: </b>
                        <span>{character.location.name}</span>
                    </div>                    
                    <div>
                        <b>First seen in: </b>
                        <span>{lastSeenEpisodeName}</span>
                    </div>
                </section>
            </article>
        </div>
    );
};