import axios from "axios";

export async function putRequest(url:string, requestData: any, config: any = {}) {
  let error: boolean = false
  let response: any

  try {
    response = await axios.put(url, requestData, config)
  } catch (e: any) {
    error = true
    response = e.response
  }

  return {response, error}
}