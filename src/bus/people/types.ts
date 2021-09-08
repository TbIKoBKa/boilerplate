// Core
export type Person = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: Array<string>,
    species: Array<string>,
    vehicles: Array<string>,
    starships: Array<string>,
    created: string,
    edited: string,
    url: string,
    [key: string]: any,
}

export type People = Array<Person>

// Set
export const SET_PEOPLE = 'SET_PEOPLE';
export type SetPeopleActionType = {
    type: typeof SET_PEOPLE;
    payload: People
}
export type SetPeopleContract = (payload: People) => SetPeopleActionType

export type PeopleActionTypes =
    | SetPeopleActionType
