export type Login = {
    username: string,
    password: string,
}

export type Register = {
    username: string,
    password: string,
    myGender: number,
    genderPreference: number,
    interests: string[],
}

export type UpdateUser = Omit<Register, 'username' | 'password'>;