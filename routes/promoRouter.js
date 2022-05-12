const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')  
// all in one location
// dishes is the endpoint  representing /, the req,res and next is the call back
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send all the promotions to you');
}) 

.post((req,res,next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description); 
})

.put((req,res,next) => {
    res.statusCode = 403; // because we don't want to update the dish and its not supported
    res.end('PUT operation not supported on /promotions');
})

.delete((req,res,next) => {
    res.end('Deleting all the promotions');
});

// The promorouter/promoId
promoRouter.route('/:promoId') 

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
})   

.post((req,res,next) => {
    res.statusCode = 403; // because we don't want to update the dish and its not supported
    res.end('POST operation not supported on /promotion/' + req.params.promoId);
})

.put((req,res,next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.params.promoId + ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = promoRouter