import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../comon/themeSlice";
import repoReducer from "../features/personal-homepage/repoSlice";
import createSagaMiddleware from "@redux-saga/core";
import { repoSaga } from "../features/personal-homepage/repoSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        theme: themeReducer,
        repo: repoReducer,
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(repoSaga);

export default store;