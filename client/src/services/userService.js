import axiosConfig from "../axiogConfig";

export const apiGetCurrentUserInfor = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/user/getInfor'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})