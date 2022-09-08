const getUsers = (req, res) => {
    res.status(200).send ("Get all users")
};
const getUser = (req, res) => {
    res.status(200).send ("Get single user")
};
const createUser = (req, res) => {
    res.status(201).send ("Create User")
};
const updateUser = (req, res) => {
    res.status(200).send ("Update User")
};
const deleteUser = (req, res) => {
    res.status(200).send ("Delete User")
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};