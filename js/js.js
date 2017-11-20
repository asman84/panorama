    const API_URL = 'http://panorama/api_url/';

    function assert(expected, actual, testName) {
        if (actual === expected) {
            console.log('Expected ' + expected + ' . the result of function is ' + actual)
        } else {
            console.log('Expected ' + expected + ' but result of your code is ' + actual)
        }
    }

    function choosePositionForDetailBox(index, finalIndex) {
        if (Math.floor(index / 4) === Math.floor(finalIndex / 4)) {
            return finalIndex;
        } else {
            return 4 * (Math.floor(index / 4) + 1) - 1;
        }
    }

    function renderComments(comments) {
        comments.forEach(function(item) {
            $('.comments-list').append($('.comment-example').html());
            $('.commentator').last().text(item.commentator);
            $('.comment').last().text(item.comment);
        });
        $('.loadMoreComment').click(function() {
            $('.comments-list').toggleClass('loadMore');
            $('.comments-list').scrollTop(0);
        });
    }

    function renderMovies(items) {
        $('.mediaBox').empty();
        if (items.length) {
            items.forEach(function(item) {
                var template = $('.template-mediaBox').html();
                var badgeNew = $('.signNew').html();
                var stars = $('.ratingSign').html();
                $('.mediaBox').append(template);
                $('.nameItem').last().text(item.name);
                $('.movie-templete').last().attr('title', item.name);
                $('.year').last().text(item.year);
                $('.type').last().text(item.type);
                $('.totalWatch').last().text(item.totalWatch);
                if (item.isNew) {
                    $('.movie-templete').last().append(badgeNew);
                }
                for (var i = 0; i < item.rating; i++) {
                    $('.rating').last().append(stars);
                }
                $('.movieBox').last().click(function() {
                    $('.infoUnderVideo').hide();
                    var lastIndex = $('.movieBox').length - 1;
                    var positionToAppend = choosePositionForDetailBox($(this).index(), lastIndex);
                    var details = $('.movieInfoAndComment').html();
                    $('.movieBox').eq(positionToAppend).after(details);
                    $('.infoUnderVideo').loading({ circles: 3, overlay: true, width: 75 });
                    $('.detailName').last().text(item.name);
                    $('.genre').last().text(item.genre);
                    $('.year').last().text(item.year);
                    $('.infoAboutMovie').text(item.details);
                    $('.movieInfo-box').after($('.comment-template').html());
                    var requestForComments = $.ajax({
                        method: 'POST',
                        url: API_URL,
                        cache: false,
                        dataType: 'json',
                        data: {
                            'id': item.id,
                            'action': 'comment'
                        }
                    });
                    requestForComments.then((response) => {
                        renderComments(response);
                        $('.infoUnderVideo').loading({ destroy: true });
                    });
                });
            });
        } else {
            $('.noresult').show();
        }
    }

    function choosingTypes(elemtype) {
        var dataToSend = {};
        if (elemtype !== undefined) {
            dataToSend = elemtype;
        }
        $('.mediaBox').loading({ circles: 3, overlay: true, width: 100 });
        var request = $.ajax({
            method: 'POST',
            cache: false,
            url: API_URL,
            data: elemtype,
            dataType: 'json'
        });
        request.then((response) => {
            $('.mediaBox').loading({ destroy: true });
            renderMovies(response);
        });
        request.fail((error) => {
            $('#aboutError').modal({});
        });
    }

    function initApplication() {
        $('.noresult').hide();
        $('.carousel').carousel();
        choosingTypes({ action: 'movies' });
    }

    $(document).ready(function($) {
        initApplication();

        $('#movies').click(function(elem) {
            choosingTypes({ type: 'movie', action: 'movies' });
            // $('.navbar-nav. nav-item').removeClass('active');
            $('#movies').parent().addClass('active');
            // elem.preventDefault();
            // var sectionID = elem.currentTarget.id + '-section';
            // $('html body').animate({
            //     scrollTop: $('.movieBox').offset(200).top
            // }, 1000);
        });

        $('#serials').click(function() {
            choosingTypes({ type: 'serial', action: 'movies' });
            // $('.navbar-nav. nav-item').removeClass('active');
            $('#serials').parent().addClass('active');
        });
        $('#cartoons').click(function() {
            choosingTypes({ type: 'cartoon', action: 'movies' });
            // $('.navbar-nav. nav-item').removeClass('active');
            $('#cartoons').parent().addClass('active');
        });
        $('#videos').click(function() {
            choosingTypes({ type: 'video', action: 'movies' });
            // $('.navbar-nav. nav-item').removeClass('active');
            $('#videos').parent().addClass('active');
        });

    });