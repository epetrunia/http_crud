const { Router } = require('express');
const router = Router();
const userRouter = require('./routes/user.route');

router.use(userRouter);
module.exports = router;
