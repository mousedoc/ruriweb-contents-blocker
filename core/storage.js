let map = {};
map['reply'] = false;
map['view-count'] = false;
map['reply-count'] = false;
map['recommend-count'] = false;

var storage = chrome.storage.local;

Storage = {

    // getKeys: function () {
    //     return Object.keys(map);
    // },

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