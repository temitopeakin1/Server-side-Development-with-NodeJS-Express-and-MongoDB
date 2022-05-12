const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')  
// all in one location
// dishes is the endpoint  representing /, the req,res and next is the call back
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all the leaders to you');
}) 

.post((req,res,next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description); 
})

.put((req,res,next) => {
    res.statusCode = 403; // because we don't want to update the dish and its not supported
    res.end('PUT operation not supported on /leaders');
})

.delete((req,res,next) => {
    res.end('Deleting all the leaders');
});

// The dishrouter/dishId
leaderRouter.route('/:leaderId') 

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of the leaders: ' + req.params.leaderId + ' to you!');
})   

.post((req,res,next) => {
    res.statusCode = 403; // because we don't want to update the dish and its not supported
    res.end('POST operation not supported on /leaders/' + req.params.leadersId);
})

.put((req,res,next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.params.leaderId + ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting leader: ' + req.params.dishId);
});

module.exports = leaderRouter;
