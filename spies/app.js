var db = require('./db.js');

// Testing app
module.exports.handleSignUp = (email , password) => {
    // Check if the email already exist
    db.saveUser({
        email,
        password
    });
    // Send Welcome email
};