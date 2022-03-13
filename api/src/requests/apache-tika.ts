import {putRequest} from "./index";
import {APACHE_TIKA_URL} from "../config/constants";

export async function uploadFile(file: any) {

  return await putRequest(APACHE_TIKA_URL, file, {
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  })
}