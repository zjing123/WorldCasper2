jQuery(document).ready(function($){
    var resizing = false,
        navigationWrapper = $('.site-header > .inner'),
        searchForm = $('.cd-main-search'),
        searchTrigger = $('.cd-search-trigger'),
        coverLayer = $('.cd-cover-layer');

    function checkResize() {
        if( !resizing ) {
            resizing = true;
            (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
        }
    }

    function moveNavigation(){
        if ( (navigationWrapper.siblings('.cd-main-search').length == 0) ) {
            searchForm.detach().insertAfter(navigationWrapper);
        }

        resizing = false;
    }

    function closeSearchForm() {
        searchForm.removeClass('is-visible');
        coverLayer.removeClass('search-form-visible');
    }

    //move navigation and search form elements according to window width
    moveNavigation();
    $(window).on('resize', checkResize);

    searchTrigger.on('click', function(event){
        event.preventDefault();
        if( searchTrigger.hasClass('search-form-visible') ) {
            searchForm.find('form').submit();
        } else {
            coverLayer.addClass('search-form-visible');
            searchForm.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                searchForm.find('input[type="search"]').focus().end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            });
        }
    });

    //close search form
    searchForm.on('click', '.close', function(event){
        event.preventDefault();
        closeSearchForm();
    });

    coverLayer.on('click', function(){
        closeSearchForm();
    });

    $(document).keyup(function(event){
        if( event.which=='27' ) closeSearchForm();
    });

    /*search post*/
    $("#search-field").ghostHunter({
        results: "#search-results",
        onKeyUp: true,
        displaySearchInfo: true,
        result_template : "<a href='{{link}}'><li class='list-group-item'>{{title}}</li></a>",
    });
});
