let map = {};
map['active'] = false;

var storage = chrome.storage.local;

Storage = {

    set: function (key, value, callback) {
        var obj = {};
        obj[key] = value;
        storage.set(obj, function (result) {
            callback(key, value);
        });
    },

    get: function (key, callback) {
        storage.get(key, function (result) {
            callback(result[key]);
        });
    }
};

Storage.keys = Object.keys(map);