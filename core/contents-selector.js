let contentMap = {};

contentMap['reply'] = false;
contentMap['view-count'] = false;
contentMap['reply-count'] = false;
contentMap['recommend-count'] = false;

ContentMap = {

    getConvertedKey: function (key) {
        return 'ruriweb-contents-blocker-' + key;
    },

    get: function (key) {

        if (key in contentMap == false) 
            return false;
        


        return localStorage.getItem(this.getConvertedKey(key)) == 'true';
    },

    // Return by boolean type
    set: function (key, value) {

        if (key in contentMap == false) 
            return;
        


        localStorage.setItem(this.getConvertedKey(key), value);
    }
};

function initializeSelector() {

    Logger.logExecute(arguments.callee.name);

    // document is already ready to go
    if (document.readyState === "complete" || document.readyState === "loaded") {
        process();
    } else 
        document.addEventListener('DOMContentLoaded', process);
    


    function process() {
        Object.keys(contentMap).forEach(function (key) {
            updateCheckBoxValue(key);
            updateCheckBoxText(key);
        });
    }

    function updateCheckBoxValue(key) {
        var checkBox = document.getElementById(key);
        if (checkBox) {

            checkBox.checked = ContentMap.get(key);

            checkBox.addEventListener('change', function (element) {
                Logger.log(key + ' : ' + element.target.checked);
                ContentMap.set(key, element.target.checked);

                updateCheckBoxText(key);
            });
        }
    }

    function updateCheckBoxText(key) {

        console.log(key + '-text');
        var textBox = document.getElementById(key + '-text');
        console.log(textBox);
        if (textBox) {
            textBox.innerHTML = ContentMap.get(key) ? 'ON' : 'OFF';
        }
    }
}

initializeSelector();
