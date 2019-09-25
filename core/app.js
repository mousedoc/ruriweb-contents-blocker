(function () {
    
    Logger.log('Run');

    removeComments();
    removeViewCounts();
    removeAdvertising();

    function removeComments() {
        Logger.logExecute(arguments.callee.name);

        // Add padding-bottom on main_view
        var boardMainView = document.querySelector('.board_main_view');
        if (boardMainView) {
            boardMainView.style.paddingBottom = '20px';
        }

        // Remove board_main_bottom
        var boardMainBottom = document.querySelector('.board_main_bottom');
        if (boardMainBottom) {
            boardMainBottom.remove();
        }

        // Remove comments
        var boardBottom = document.querySelector('.board_bottom');
        if (boardBottom) {
            boardBottom.remove();
        }

        Logger.logDone(arguments.callee.name);
    }

    function removeViewCounts() {
        Logger.logExecute(arguments.callee.name);

        var numReplys = document.querySelectorAll('.num_reply');
        if (numReplys) {
            numReplys.forEach(function (item, index, array) {
                item.remove();
            });
        }

        Logger.logDone(arguments.callee.name);
    }

    function removeAdvertising() {
        Logger.logExecute(arguments.callee.name);


        Logger.logDone(arguments.callee.name);
    }
})()
