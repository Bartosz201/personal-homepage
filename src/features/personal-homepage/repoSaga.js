import { call, delay, put, takeLatest } from "redux-saga/effects"
import { getGithubRepo } from "./getGithubRepo"
import { setRepositories, setStatusError, setStatusLoadin, setStatusSuccess } from "./repoSlice"

function* fetchRepositoriesHendler() {
    try {
        yield delay(2000)
        const repositories = yield call(getGithubRepo, "bartosz201")
        yield put(setRepositories(repositories))
        yield put(setStatusSuccess())
    }
    catch (error) {
        yield put(setStatusError())
    }
};

export function* repoSaga() {
    yield takeLatest(setStatusLoadin.type, fetchRepositoriesHendler)
};