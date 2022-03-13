import axios from "axios";
import {log} from "../logger";

export async function putRequest(url:string, requestData: any, config: any = {}) {
  let error: boolean = false
  let response: any

  try {
    response = await axios.put(url, requestData, config)
    log.info('Info tika', response.data, response.status)

  } catch (e: any) {
    error = true
    response = e.response
    log.error('Error tika', e)

  }

  return {response, error}
}