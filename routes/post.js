const postcontroller = require('../controller/post')
const express = require('express')
const router = express.Router()

router.get('/', postcontroller.getAllPost)
router.post('/', postcontroller.createPosts)
router.delete('/apis', postcontroller.deleteAllPost)
router.delete('/api/:id', postcontroller.deletePost)




module.exports = router