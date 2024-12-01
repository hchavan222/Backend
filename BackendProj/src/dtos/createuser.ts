export interface createUser{
    id : string,
    name: string,
    pass : string

}

export interface queryUser{
    isvalid : boolean
}

export interface User{
    id: number,
    name:string,
    email:string
}