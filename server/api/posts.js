const router = require('express').Router();
const {models: { Post }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.findAll();
    res.send(allPosts);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
