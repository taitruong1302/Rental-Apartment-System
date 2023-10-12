import express from 'express'
import * as postController from '../controllers/postController'

const router = express.Router()
router.get('/getAll', postController.getPosts)

export default router