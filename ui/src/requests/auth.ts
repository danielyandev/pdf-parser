import {postRequest} from "./index";

export async function signIn(requestData: any){
    return await postRequest('/login', requestData)
}

export async function signUp(requestData: any){
    return await postRequest('/register', requestData)
}