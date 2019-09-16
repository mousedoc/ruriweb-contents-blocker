; (function () {
    console.log('[Ruriweb-comment-blocker] Running extension')

    BlockComments()

    function BlockComments() {
        console.log('[Ruriweb-comment-blocker] blockComments()')

        var board_bottom = document.querySelector('.board_bottom')
        if (board_bottom)
        {
            board_bottom.remove()
            // stats.style.display = 'none'        
        }
    }
})()
