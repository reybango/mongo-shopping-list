var express = require('express');
var Item = require('../services/item');
var router = express.Router();

router.get('/items', function(req, res) {
    Item.list(function(items) {
        res.json(items);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.post('/items', function(req, res) {
    Item.save(req.body.name, function(item) {
        res.status(201).json(item);
    }, function(err) {
        res.status(400).json(err);
    });
});

// Delete an existing item
router.delete('/items/:id', function(req,res){
   
    Item.delete({_id: req.params.id}, function(item) {
        if (!item) {
            res.status(400).json(err); 
            console.error("Could not delete item");
            return;
        }
        res.status(200).json(item); 
        console.log("Deleted item", item.name);
    });    
    
});

// Update an existing item
router.put('/items/:id', function(req,res){
   
    Item.update( req.params.id, {'name': req.body.name}, function(item) {
        if (!item) {
            res.status(400).json(err); 
            console.error("Could not update item");
            return;
        }
        res.status(200).json(item); 
        console.log("Updated item", item.name);
    });    
    
});

module.exports = router;