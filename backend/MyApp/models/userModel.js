const conn = require('../bin/db');

const User = function(account) {
    this.username = account.username;
    this.email = account.email;
    this.password = account.password;
};

User.create = (data, cb) => {
    let sql = 'INSERT INTO users SET ?';
    conn.query(sql, data, (err, result) => {
        if (err) {
            cb(null, err);
        } else {
            cb({
                message: "User Registered",
                record: result.insertId
            });
        }
    });
};

//login

User.findOne = (email, cb) => {
    let sql = 'SELECT * FROM users WHERE email = ?';
    conn.query(sql, [email], (err, results) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, results[0]);  // assuming email is unique, so we return the first match
        }
    });
};

module.exports = User;
