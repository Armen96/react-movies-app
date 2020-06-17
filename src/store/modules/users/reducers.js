import {UserActionTypes} from "./types";

export const initialState = {
    users: [],
    errors: [],
    loading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOAD_USERS: {
            return {
                ...state,
                loading: true
            }
        }

        case UserActionTypes.LOAD_USERS_SUCCESS: {
            const users = action.payload;
            return {
                ...state,
                users,
                loading: false
            }
        }

        case UserActionTypes.LOAD_USERS_ERROR: {
            const errors = action.payload;
            return {
                ...state,
                errors,
                loading: true
            }
        }

        default: {
            return state;
        }
    }
}
