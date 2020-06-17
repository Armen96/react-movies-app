import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import { postsReducer } from "./post/reducers";
import { usersReducer } from "./users/reducers";

export const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

const requireSaga = require.context('./', true, /\.\/\w+\/[^\/]*?.js/);

const sagas = requireSaga.keys().reduce((memo, path) => {
    let saga = requireSaga(path);
    if (saga.default) saga = saga.default;

    // Only add if function.
    if (typeof saga === 'function') {
        memo.push(saga);
    }

    return memo;
}, []);

export function* rootSaga() {
    yield all(sagas.map(saga => forkSafely(saga)));
}

function* forkSafely(saga, ...args) {
    try {
        yield call(saga, ...args);
    } catch (e) {

        console.warn(
            `Exception below thrown in saga "${saga.name}". Restarting.`
        );
        console.error(e);
        yield* forkSafely(...arguments);
    }
}
