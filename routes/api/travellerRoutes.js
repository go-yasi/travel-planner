const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET route /api/travellers returns all traveller data without associated trips
router.get('/:id', async (req, res) => {

});

// POST route /api/travellers creates traveller data
router.post('/', async (req, res) => {

});

// GET route /api/travellers/:id returns a single traveller's data with their associated trips
router.get('/:id', async (req, res) => {

});


// DELETE route /api/travellers/:id removes a traveller and any trips associated with them
router.delete('/:id', async (req, res) => {

});

module.exports = router;