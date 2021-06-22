const router = require('express').Router();
const { Trip, Traveller, Location } = require('../../models');



// POST route /api/trips creates trip data between associated travellers and locations.
router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
})

// DELETE route /api/trips/:id removes a trip 
router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!tripData) {
            res.status(404).json({ message: 'No trip found with that id!' });
            return;
        }
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
