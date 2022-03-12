import * as t from "./types";

export function saveToken(data: any) {
  return (dispatch: any) => {
    if (data.hasOwnProperty('access_token')) {
      localStorage.setItem('access_token', data.access_token)
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token)
      }
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({
        type: t.SAVE_TOKEN_SUCCESS,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        user: data.user
      })
    } else {
      dispatch({
        type: t.SAVE_TOKEN_FAILURE,
        errors: data.errors
      })
    }
  }
}

export function logout() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  return (dispatch: any) => {
    dispatch({
      type: t.SAVE_TOKEN_FAILURE,
    })
  }
}