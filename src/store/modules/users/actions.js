import { UserActionTypes } from './types';

export const loadUsers = () => {
    return {
       type: UserActionTypes.LOAD_USERS,
       payload: null,
       meta: {
           method: 'get',
           route: '/users'
       }
    }
}

export const loadUsersListSuccess = (payload) => {
    return {
        type: UserActionTypes.LOAD_USERS_SUCCESS,
        payload
    }
}

export const loadUsersError = (error) => {
    return {
        type: UserActionTypes.LOAD_USERS_ERROR,
        payload: error
    }
}
