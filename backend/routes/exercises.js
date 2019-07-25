const router = require('express').Router;
const Exercise = require('../models/exercise.model');

// Route to home/exercises/
router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises)) //return json
    .catch(err => res.status(400).json('Error: ', err))
});

router.route('/add').post((req, res) => {
    const username = res.body.username;
    const description = res.body.description;
    const duration = Number(res.body.duration); // convert to number
    const date = Date.parse(req.body.date); // convert to date

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save() // Save to mongodb atlas
    .then(() => res.json('Exercis added!'))
    .catch(err => res.status(400).json('Error: ', err))

});

module.exports = router;