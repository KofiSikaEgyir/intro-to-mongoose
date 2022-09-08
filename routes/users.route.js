const router = require("express").Router
const {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} = require("../controllers/users.controller");

const userRouter = router();

userRouter.route("/").get(getUsers).get(getUser)
userRouter.route("/").post(createUser).patch(updateUser).delete(deleteUser)

module.exports = userRouter;