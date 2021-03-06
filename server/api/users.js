const router = require('express').Router();
const {models: { User }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ['id', 'username']
    });
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
