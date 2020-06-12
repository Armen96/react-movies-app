import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import apiCaller from "../../../utils/apiCaller";
import { fetchPostsError, fetchPostsSuccess } from "./actions";
import { PostActionTypes } from "./types";

function* handleFetch(action) {
    try {
        const res = yield call(
            apiCaller,
            action.meta.method,
            action.meta.route
        );

        yield put(fetchPostsSuccess(res));
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchPostsError(err.stack));
        } else {
            yield put(fetchPostsError("An unknown error occurred."));
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(PostActionTypes.FETCH_POSTS, handleFetch);
}

export default function* postSaga() {
    yield all([fork(watchFetchRequest)]);
}
