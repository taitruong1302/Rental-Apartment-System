import express from 'express'
import * as postController from '../controllers/postController'

const router = express.Router()
router.get('/getAll', postController.getPosts)
router.get('/getLimit', postController.getLimitPosts)
router.get('/getNewPost', postController.getNewPosts)

export default router