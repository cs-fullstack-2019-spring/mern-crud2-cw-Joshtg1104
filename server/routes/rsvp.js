let express = require('express');
let router = express.Router();
let RSVPCollection = require('../models/RSVPSchema');

/*
    ENDPOINT IMPLEMENTATION OF A SIMPLE RSVP WEB SERVICE
 */
// Return the list of all the current RSVPs
router.get('/list', function (req, res, next) {
    console.log(`LIST RSVPS`);
    RSVPCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// Get a specific RSVP
router.get('/:id', function (req, res, next) {
    console.log(`LIST RSVP ${req.params.id}`);
    RSVPCollection.find({_id: req.params.id}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })

});

// Update an existing RSVP
router.put('/edit', function (req, res, next) {
    RSVPCollection.updateOne({_rsvpID: req.body.rsvpID}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// Delete a specific RSVP -IMPLEMENT YOUR OWN FUNCTION
router.delete('/delete', (req, res) => {
    RSVPCollection.deleteOne({rsvpID: req.body.rsvpID}, (error, results) => {
        if(error)
            res.send(error);
        else
            res.send('Deleted')
    })
});

//Create a new RSVP -IMPLEMENT YOUR OWN FUNCTION
router.post('/add', (req, res) => {
    RSVPCollection.create(req.body, (error, results) => {
        if(error)
            res.send(error);
        else
            res.send('Added');
    });
});

module.exports = router;
