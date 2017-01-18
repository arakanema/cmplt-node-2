var db = require('./db');

module.exports.handelSignup = (email, password) => {
  // Check if email already exists
  // Save the user to the database
  db.saveUser({email, password}); // ES6 syntax!!
  // Send the welcome email
}
