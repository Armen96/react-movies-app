import { applyMiddleware, createStore } from "redux";

import { rootReducer, rootSaga } from "./modules";
import sagaMiddleware from "./middlewares/sagas";

export default function configureStore(initialState) {
    const middlewares = applyMiddleware(sagaMiddleware);
    const store = createStore(rootReducer, initialState, middlewares);

    sagaMiddleware.run(rootSaga);

    return store;
}
