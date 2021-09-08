// Core
export type Profile = {
    firstName: string
    surname: string
    age: string | number
    email: string
    sex: string
    speciality: string
}

// Fill
export const FILL_PROFILE_DATA = 'FILL_PROFILE_DATA';
export type FillProfileDataActionType = {
    type: typeof FILL_PROFILE_DATA
    payload: Profile
}
export type FillProfileDataContract = (payload: Profile) => FillProfileDataActionType

export type ProfileActionTypes =
    | FillProfileDataActionType
