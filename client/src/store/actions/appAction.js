import actionTypes from './actionTypes'
import * as api from '../../services'

export const getCategories = () => async (dispatch) => {
    try {
        const response = await api.apiGetCategories()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories: response.data.response
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                msg: response.data.msg,
                categories: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories: null
        })
    }
}

export const getPrices = () => async (dispatch) => {
    try {
        const response = await api.apiGetPrices()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRICES,
                prices: response.data.response.sort((a, b) => +a.order - +b.order)
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_PRICES,
                msg: response.data.msg,
                prices: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRICES,
            prices: null
        })
    }
}

export const getAcreage = () => async (dispatch) => {
    try {
        const response = await api.apiGetAcreage()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ACREAGE,
                acreage: response.data.response.sort((a, b) => +a.order - +b.order)
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_ACREAGE,
                msg: response.data.msg,
                acreage: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ACREAGE,
            prices: null
        })
    }
}