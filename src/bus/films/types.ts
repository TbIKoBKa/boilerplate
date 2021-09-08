// Core

export type Film = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: Array<string>,
    planets: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    species: Array<string>,
    created: string,
    edited: string,
    url: string,
    [key: string]: any,
}

export type Films = Array<Film>;

// Set
export const SET_FILMS = 'SET_FILMS';
export type SetFilmsActionType = {
    type: typeof SET_FILMS,
    payload: Films,
}
export type SetFilmsContract = (payload: Films) => SetFilmsActionType

export type PeopleActionTypes =
    | SetFilmsActionType
