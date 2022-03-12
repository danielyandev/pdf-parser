import {SAVE_TOKEN_FAILURE, SAVE_TOKEN_SUCCESS} from "../actions/auth/types";


const initialState: any = {
  user: JSON.parse(localStorage.getItem('user') || "null"),
  access_token: localStorage.getItem('access_token') || null,
  refresh_token: localStorage.getItem('refresh_token') || null,
}

const authReducer: any = (state: any = initialState, action: any) => {
  switch (action.type) {

    case SAVE_TOKEN_SUCCESS:
      return {
        ...state,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
        user: action.user
      }

    case SAVE_TOKEN_FAILURE:
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        user: null
      }

    default:
      return state
  }
}

export default authReducer