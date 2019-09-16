; (function () {
    console.log('[ruriweb-shit-protector] Running extension')

    BlockComments()

    function BlockComments() {
        console.log('[ruriweb-shit-protector] blockComments()')

        // Add padding-bottom on main_view
        var board_main_view = document.querySelector('.board_main_view')
        if (board_main_view) {
            board_main_view.style.paddingBottom = '20px'
        }
        // Remove board_main_bottom
        var board_main_bottom = document.querySelector('.board_main_bottom')
        if (board_main_bottom) {
            board_main_bottom.remove()
        }

        // Remove comments
        var board_bottom = document.querySelector('.board_bottom')
        if (board_bottom) {
            board_bottom.remove()
        }
    }
})()
