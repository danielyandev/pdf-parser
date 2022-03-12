import axios from "axios";
import {API_URL} from "../config/constants";

export async function getRequest(url: string, config: any = {}, absoluteUrl: boolean = false) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    let error: boolean = false
    let response: any

    try {
        response = await axios.get(absoluteUrl ? url : API_URL + url, config)
    } catch (e: any) {
        error = true
        response = e.response
    }

    return {response, error}
}

export async function postRequest(url:string, requestData: any, config: any = {}) {
    let error: boolean = false
    let response: any

    try {
        response = await axios.post(API_URL + url, requestData, config)
    } catch (e: any) {
        error = true
        response = e.response
    }

    return {response, error}
}