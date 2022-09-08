const {schema, model} = require("mongoose");

const userSchema = newSchema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: String,
    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
});

module.exports = model("User", userSchema);