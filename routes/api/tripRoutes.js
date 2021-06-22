const router = require('express').Router();
const { Trip, Traveller, Location } = require('../../models');



// POST route /api/trips creates trip data between associated travellers and locations.
router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create({
            include: [{ model: Traveller }, { model: Location }],
        });
    res.status(200).json(tripData);
} catch (err) {
res.status(400).json(err);
}
})

// DELETE route /api/trips/:id removes a trip 
router.delete('/:id', async (req,res) => {
    try {
        const tripData = await Trip.destroy
    }
})