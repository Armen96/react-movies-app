import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

import { postReducer } from "./post/reducers";
import postSaga from "./post/sagas";

export const rootReducer = combineReducers({
    post: postReducer
});

export function* rootSaga() {
    yield all([fork(postSaga)]);
}
