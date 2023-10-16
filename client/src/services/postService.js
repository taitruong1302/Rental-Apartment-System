import axiosConfig from '../axiogConfig'

export const apiGetPosts = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/getAll',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetLimitPosts = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/getLimit`,
            params: query
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetNewPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/getNewPost`
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})