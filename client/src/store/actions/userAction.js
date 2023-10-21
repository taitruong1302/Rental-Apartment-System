import actionTypes from './actionTypes'
import * as userService from '../../services'

export const getCurrentUserInfor = () => async (dispatch) => {
    try {
        const response = await userService.apiGetCurrentUserInfor()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT_USER,
                currentUser: response.data.response
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_CURRENT_USER,
                msg: response.data.msg,
                currentUser: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT_USER,
            currentUser: null,
            msg: error
        })
    }
}