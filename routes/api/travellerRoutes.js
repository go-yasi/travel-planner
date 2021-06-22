const router = require('express').Router();
const { Traveller, Trip} = require('../../models');

// GET route /api/travellers returns all traveller data without associated trips
router.get('/', async (req, res) => {
    const travellerData = await Traveller.findAll().catch((err) => {
        res.json(err);
    });
    res.json(travellerData);
});

// POST route /api/travellers creates traveller data
router.post('/', async (req, res) => {
    try {
        const travellerData = await Traveller.create(req.body);
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route /api/travellers/:id returns a single traveller's data with their associated trips
router.get('/:id', async (req, res) => {

});


// DELETE route /api/travellers/:id removes a traveller and any trips associated with them
router.delete('/:id', async (req, res) => {

});

module.exports = router;