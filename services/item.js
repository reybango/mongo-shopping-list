var Item = require('../models/item');

exports.save = function(name, callback, errback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};

exports.list = function(callback, errback) {
    Item.find(function(err, items) {
        if (err) {
            errback(err);
            return;
        }
        callback(items);
    });
};

exports.delete = function(data, callback, errback) {
    Item.findOneAndRemove(data, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};

exports.update = function(id, data, callback, errback) {
    Item.findByIdAndUpdate(id, data, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};