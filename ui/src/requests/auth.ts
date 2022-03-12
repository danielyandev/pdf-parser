import store from "../store";
import {postRequest} from "./index";

export async function signIn(requestData: any){
    requestData.grant_type = 'password'
    return await postRequest('/oauth/token', requestData)
}

export async function refreshToken(){
    const refresh_token: string = store.getState().auth.refresh_token
    const requestData = {
        grant_type: 'refresh_token',
        refresh_token
    }
    return await postRequest('/oauth/token', requestData)
}

export async function signUp(requestData: any){
    return await postRequest('/register', requestData)
}