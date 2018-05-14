var express = require('express');
const router = express.Router();
// Import index action from movies controller
const index = require('./controllers/movies');



// Initialize the router
//const router = Router();

// Handle /movies.json route with index action from movies controller
router.get('/movies.json',index);

module.exports = router
