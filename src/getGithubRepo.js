import axios from "axios";

export const getGithubRepo = (username) =>
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(response => response = response.data)