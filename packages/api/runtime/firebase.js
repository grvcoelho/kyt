const admin = require('firebase-admin')
const { serviceAccountId } = require('../config/firebase')

admin.initializeApp({
  serviceAccountId,
});

const createUser = () =>
  admin.auth().createUser({
    email: "user@example.com",
    emailVerified: false,
    phoneNumber: "+11234567890",
    password: "secretPassword",
    displayName: "John Doe",
    photoURL: "http://www.example.com/12345678/photo.png",
    disabled: false
  })
    .then(function(userRecord) {
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch(function(error) {
      console.log("Error creating new user:", error);
    });

module.exports = {
  createUser,
}
