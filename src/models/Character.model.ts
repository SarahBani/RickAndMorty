import { Entity } from "./Entity.model";
import { Episode } from "./Episode.model";
import { Location } from "./Location.model";

export interface Character extends Entity {
    name: string;
    status: string;
    species: string,
    type: string,
    gender: boolean;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    episodeNames: string[];
    created: Date
}
