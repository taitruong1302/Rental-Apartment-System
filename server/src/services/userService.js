import db from '../models'

export const getCurrentUserInfor = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Cannot get user information.',
            response
        })
    } catch (error) {
        reject()
    }
})