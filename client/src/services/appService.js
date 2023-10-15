import axios from '../axiogConfig'

export const apiGetPrices = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/price/getAll'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAcreage = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/acreage/getAll'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})