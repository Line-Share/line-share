const router = require('express').Router();
const {models: { Post, User }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.findAll({
      include: [{model: User}]
    });
    res.send(allPosts);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const newPost = await Post.create({
      imageUrl: req.body.imageUrl,
      caption: req.body.caption,
    });
    const postUser = await User.findByPk(req.body.userInfo.id)
    await postUser.addPost(newPost)
    res.send(newPost);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
