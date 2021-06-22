const router = require('express').Router();
const {Location, Traveller, Trip} = require("../../models"); 

// GET route /api/locations returns all location data in Insomnia Core.
router.get("/", async (req,res) => {
  try{
      const locationData = await Location.findAll({
          include: [{model:Traveller}, {model: Trip}],
      }); 
      res.status(200).json(locationData); 
  } catch (err){
      res.status(500).json(err); 
  }
}); 
// POST route /api/locations creates location data
router.post("/", async (req, res) => {
  
})
// GET route /api/locations/:id returns a single location's data, with its associated trips,
router.get("/:id", async (req,res) => {
  
})
// DELETE route /api/locations/:id removes a location and any trips associated with it
router.delete("/:id", async (req,res) => {
  
})