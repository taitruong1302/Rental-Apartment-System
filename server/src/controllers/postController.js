import { response } from 'express'
import * as postService from '../services/postService'

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller ' + error
        })
    }
}

export const getLimitPosts = async (req, res) => {
    const { page, priceNumber, acreageNumber, ...query } = req.query
    try {
        const response = await postService.getLimitPostsService(page, query, { priceNumber, acreageNumber })
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller ' + error
        })
    }
}

export const getNewPosts = async (req, res) => {
    const { page, ...query } = req.query
    try {
        const response = await postService.getNewPostsService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller ' + error
        })
    }
}