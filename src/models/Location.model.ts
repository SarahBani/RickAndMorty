import { Character } from "./Character.model";
import { Entity } from "./Entity.model";

export interface Location extends Entity {
    name: string;
    type: string;
    dimension: string;
    residentsCount: number;
    url: string;
}
