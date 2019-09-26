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
        

        return localStorage.getItem(this.getConvertedKey(key));
    },

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
        initAppCheckBox();
    } else 
        document.addEventListener('DOMContentLoaded', initAppCheckBox);
    


    function initAppCheckBox() {
        Object.keys(contentMap).forEach(function (key) {

            console.log(key);
            var checkBox = document.getElementById(key);

            if (checkBox) {

                var value = ContentMap.get(key) == 'true';
                checkBox.checked = value;

                checkBox.addEventListener('change', function (element) {
                    Logger.log(key + ' : ' + element.target.checked);
                    ContentMap.set(key, element.target.checked);
                });

                
                // var text = document.getElementById('${key}-text');
                // if (text) 
                //     text.style.display = 'none';
                
            }
        });
    }
}

initializeSelector();
