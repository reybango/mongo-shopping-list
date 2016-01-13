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

router.delete('/items/:id', function(req,res){
   
    var id = req.params.id, item = '';
    item = storage.delete(parseInt(id));
    res.status(200).json(item); 

});

router.put('/items/:id', jsonParser, function(req,res){
 
    if(!req.body) {
        return res.sendStatus(400).send('Nope');
    }
 
    storage.update(parseInt(req.params.id), req.body.name);
    res.status(200).json({'name': req.body.name}); 

});

module.exports = router;