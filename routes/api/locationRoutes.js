const router = require('express').Router();
const { Router } = require('express');
const {Location, Traveller, Trip} = require("../../models"); 

// GET route /api/locations returns all location data in Insomnia Core.
router.get("/", async (req,res) => {
  try{
      const locationData = await Location.findAll(); 
      res.status(200).json(locationData); 
  } catch (err){
      res.status(500).json(err); 
  }
}); 
// POST route /api/locations creates location data
router.post("/", async (req, res) => {
  
})
// GET route /api/locations/:id returns a single location's data, with its associated trips,
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
    });
    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE route /api/locations/:id removes a location and any trips associated with it
router.delete("/:id", async (req,res) => {
  
})

module.exports=router;