const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')  
// all in one location
// dishes is the endpoint  representing /, the req,res and next is the call back
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all the dishes to you');
}) 

.post((req,res,next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description); 
})

.put((req,res,next) => {
    res.statusCode = 403; // because we don't want to update the dish and its not supported
    res.end('PUT operation not supported on /dishes');
})

.delete((req,res,next) => {
    res.end('Deleting all the dishes');
});

// The dishrouter/dishId
dishRouter.route('/:dishId') 

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of the dishes: ' + req.params.dishId + ' to you!');
})   

.post((req,res,next) => {
    res.statusCode = 403; // because we don't want to update the dish and its not supported
    res.end('POST operation not supported on /dishes/' + req.params.dishId);
})

.put((req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.params.dishId + ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter
