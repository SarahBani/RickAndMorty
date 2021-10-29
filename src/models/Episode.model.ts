import { Character } from "./Character.model";
import { Entity } from "./Entity.model";

export interface Episode extends Entity {
    name: string;
    air_date: Date;
    url: string;
}
