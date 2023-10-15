import actionTypes from './actionTypes'
import * as postService from '../../services/postService'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await postService.apiGetPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response
            })
        }
        else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            post: null
        })
    }
}

export const getLimitPosts = (query) => async (dispatch) => {
    try {
        const response = await postService.apiGetLimitPosts(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_LIMIT_POSTS,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_LIMIT_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_LIMIT_POSTS,
            posts: null
        })
    }
}