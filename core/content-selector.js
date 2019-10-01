let contentMap = {};
contentMap['reply'] = false;
contentMap['view-count'] = false;
contentMap['reply-count'] = false;
contentMap['recommend-count'] = false;

var storage = chrome.storage.local;

ContentMap = {

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

function initializeSelector() {

    Logger.logExecute(arguments.callee.name);

    // document is already ready to go
    if (document.readyState === "complete" || document.readyState === "loaded") {
        process();
    } else {
        document.addEventListener('DOMContentLoaded', process);
    }

    function process() {
        Object.keys(contentMap).forEach(function (key) {

            ContentMap.get(key, function (value) {

                updateCheckBoxValue(key, value);
                updateCheckBoxText(key, value);

            });
        });
    }

    function updateCheckBoxValue(key, value) {
        var checkBox = document.getElementById(key);
        if (checkBox) {
            checkBox.checked = value;

            checkBox.addEventListener('change', function (element) {
                Logger.log(key + ' : ' + element.target.checked);
                ContentMap.set(key, element.target.checked, updateCheckBoxText);
            });
        }
    }

    function updateCheckBoxText(key, value) {
        var textBox = document.getElementById(key + '-text');
        if (textBox) {
            textBox.innerHTML = value ? 'ON' : 'OFF';
        }
    }
}

initializeSelector();
