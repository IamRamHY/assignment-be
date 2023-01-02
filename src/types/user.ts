export interface iGetUseresRequest {
    id: string;
    skip: number;
    limit: number
}

export interface iUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    profile_pic: string,
    city: string,
}