import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import repoReducer from './repoSlice'
import createSagaMiddleware from "@redux-saga/core";
import { repoSaga } from "./repoSaga";

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