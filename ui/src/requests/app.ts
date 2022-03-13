import {postRequest} from "./index";

export async function uploadFile(file: any, onUploadProgress: (progressEvent: any) => void) {
  const formData = new FormData();
  formData.append("file", file);
  return await postRequest('/upload', formData, {
    onUploadProgress,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}