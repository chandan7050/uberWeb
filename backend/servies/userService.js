const userModel = require('../models/userModels');


module.exports.createUser = async ({
    firstName,lastName,email,password
}) => {
    if(!firstName || !lastName || !email) {
        throw new Error('Missing required fields');
    }

    const user = userModel.create({
        fullName:{
            firstName,
            lastName,
        },
        email,
        password
    })

    return user;
}