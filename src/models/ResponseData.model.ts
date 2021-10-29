import { Entity } from "./Entity.model";
import { ResponseDataInfo } from "./ResponseDataInfo.model";

export interface ResponseData<T extends Entity> {
    info: ResponseDataInfo,
    results: T[]
};
