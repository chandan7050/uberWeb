const express = require('express');
const router = express.Router();
const {validationResult, body} = require("express-validator");
const { route } = require('../app');
const userController = require('../controllers/usercCsontroller');

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullName.firstName').isLength({min:3}).withMessage("First name must be at leat 3 characters long"),
    body('password').isLength({min:3}).withMessage("Password must be at least 6 characters long"),

     ],
     userController.registerUser
    )


module.exports = router;