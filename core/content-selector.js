function initializeSelector() {

    Logger.logExecute(arguments.callee.name);

    // document is already ready to go
    if (document.readyState === "complete" || document.readyState === "loaded") {
        process();
    } else {
        document.addEventListener('DOMContentLoaded', process);
    }

    function process() {
        Storage.keys.forEach(function (key) {

            Storage.get(key, function (value) {

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
                Storage.set(key, element.target.checked, updateCheckBoxText);
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
