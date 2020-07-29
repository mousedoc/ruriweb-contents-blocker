(function () {

    Logger.log('Run');

    Storage.get('active', function (value) {
        if (value) {
            removeContents();
        }
    });

    function removeContents() {
        Logger.logExecute(arguments.callee.name);

        var removeQuery = 
        [
            '.board_main_bottom',
            '.board_bottom',
            '.comment_container',
            '.btn_default btn_light no_box_shadow line_h_40 col_12',
        ];

        var removeAllQuery = 
        [
            '.num_reply',
            '.reply_count',
            '.nbp_container default'
        ];

        removeQuery.forEach(function (element, index, array) {
            var selected = document.querySelector(element);
            if(selected){
                selected.remove();
            }
        });

        removeAllQuery.forEach(function (element, index, array) {
            var selected = document.querySelectorAll(element);
            
            if(selected){
                selected.forEach(function (item, index, array) {
                    item.remove();
                });
            }
        });

        Logger.logDone(arguments.callee.name);
    }
})()
