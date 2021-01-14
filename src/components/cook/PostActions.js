import axios from 'axios'

// posts

export const GET_POSTS = "GETS_POSTS";

export const getPosts = () => {
    return (dispatch) => {
        return axios
        .get(``)
        .then((res) => {
            dispatch({ type : GET_POSTS, payload : res.data})
        })
        .catch((err) => console.log(err))
    }
}