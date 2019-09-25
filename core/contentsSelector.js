Logger.log('ddddd');


function registContetnt(name) {
    Logger.log(name);
}

document.addEventListener('DOMContentLoaded', function () { // document.getElementById('onComment').addEventListener('onclick', registContetnt('onComment'));
    document.getElementById('onComment').ontoggle = function () {
        registContetnt('onComment');
    };
});
