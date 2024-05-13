const express = require('express');
const router = express.Router();
const postsController = require('../controller/postController');

// 게시물 접근
router.get('/', postsController.getPost);

// 게시물 등록
router.post('/', postsController.createPost );
// 게시물 수정페이지 접근
router.post('/:userID', postsController.get );
// 게시물 수정
router.post('/:userID', postsController.editPost);
// 게시물 삭제
router.post('/:userID', postsController.deletePost);

module.exports = router;