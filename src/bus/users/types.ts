type TEmployment = {
    title: string,
    key_skill: string,
}

type TAddress = {
    city: string,
    street_name: string,
    street_address: string,
    zip_code: string,
    state: string,
    country: string,
    coordinates: TCoordinates,
}

type TCoordinates = {
    lat: number,
    lng: number,
}

type TCredit_card = {
    cc_number: string,
}

type TSubscription = {
    plan: string,
    status: string,
    payment_method: string,
    term: string,
}

export type TUser = {
    id: number,
    uid: string,
    password: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    avatar: string,
    gender: string,
    phone_number: string,
    social_insurance_number: string,
    date_of_birth: string,
    employment: TEmployment,
    address: TAddress,
    credit_card: TCredit_card,
    subscription: TSubscription,
    [key: string]: any,
}

export type TUsers = Array<TUser>

export const SET_USERS = 'SET_USERS';

export type SetUsersActionType = {
    type: typeof SET_USERS
    payload: TUsers
}

export type SetUsersContract = (payload: TUsers) => SetUsersActionType

export type UsersActionTypes =
    | SetUsersActionType
