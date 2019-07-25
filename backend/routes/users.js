const router = require("express").Router();
let User = require("../models/user.model"); // import model file

// Route endpoint for incomming users url path home/users/
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: ", err));
});

// Route path home/users/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    // save to db
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ', err));
});

module.exports = router;