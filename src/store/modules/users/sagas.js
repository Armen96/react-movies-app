import {all, call, takeLatest} from 'redux-saga/effects';
import {fork, put} from "redux-saga-test-plan/matchers";
import {UserActionTypes} from "./types";
import { loadUsersListSuccess, loadUsersError } from './actions';
import apiCaller from "../../../utils/apiCaller";
import {fetchPostsError} from "../post/actions";

function* handleFetch(action) {
    try {
        const response = yield call(
            apiCaller,
            action.meta.method,
            action.meta.route
        );

        yield put(loadUsersListSuccess(response));

    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchPostsError(err));
        } else {
            yield put(fetchPostsError("An unknown error occurred."));
        }
    }
}

function* watchFetchRequest() {
    yield takeLatest(UserActionTypes.LOAD_USERS, handleFetch)
}

export default function* userSaga() {
    yield all([fork(watchFetchRequest)])
}
