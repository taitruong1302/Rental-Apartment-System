import * as services from '../services/userService'

export const getCurrentUserInfor = async (req, res) => {
    const { id } = req.user
    try {
        const response = await services.getCurrentUserInfor(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at User controller ' + error
        })
    }
}