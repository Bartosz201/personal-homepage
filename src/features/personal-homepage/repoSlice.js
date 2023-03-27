import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
    name: 'repo',
    initialState: {
        repositories: [],
        status: "initial"
    },
    reducers: {
        setStatusLoadin: (state) => {
            state.status = "loading";
        },
        setStatusSuccess: (state) => {
            state.status = "success";
        },
        setStatusError: (state) => {
            state.status = "error";
        },
        setRepositories: (state, { payload: repositories }) => {
            state.repositories = repositories;
        },
        fetchRepositories: () => { },
    },
});

export const {
    setStatusLoadin,
    setStatusSuccess,
    setStatusError,
    setRepositories,
    fetchRepositories,
} = repoSlice.actions;

export default repoSlice.reducer;

const selectRepoState = (state) => state.repo;

export const selectRepositories = (state) => selectRepoState(state).repositories;
export const selectStatus = (state) => selectRepoState(state).status;