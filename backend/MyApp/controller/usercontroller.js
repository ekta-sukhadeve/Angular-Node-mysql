const User = require('../models/userModel');
const becrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = 'ahhhhhhhcvvch';


const register = (req, res) => {
    var salt = becrypt.genSaltSync(5)
    const pass = becrypt.hashSync(req.body.password, salt)
    let data = {
        username: req.body.username,
        email: req.body.email,
        password: pass
    };
    User.create(data, (result, err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "An error occurred while registering the user" });
        } else {
            res.status(201).json({ message: "User registered successfully", record: result.record });
        }
    });
};

const login = async (req, res) => {
    try {
        User.findOne(req.body.email, async (err, result) => {
            if (err) {
                return res.status(500).json({ error: "An error occurred while logging in" });
            }

            if (!result) {
                return res.status(401).json({ error: "Invalid email or password" });
            }
            const match = await becrypt.compare(req.body.password, result.password);
            if (match) {
                let params = { email: result.email };
                var token = jwt.sign(params, secret, { expiresIn: '10d' });
                return res.status(200).json({
                    message: "Login user successfully",
                    token: token
                });
            }  else {
                return res.status(401).json({ error: "Invalid email or password" });
            }
        });
    }  catch (error) {
        return res.status(500).json({ error: "An error occurred while logging in" });
    }
}

module.exports = {
    register,
    login
};
