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

    function renderDetails(item) {

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
            });
            $('.movieBox').click(function() {
                var positionToAppend = choosePositionForDetailBox($(this).index(), $('.movieBox').last().index());
                $('.movieBox').eq(positionToAppend).after($('.movieInfoAndComment').html());
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
        var request = $.ajax({
            method: 'POST',
            cache: false,
            url: API_URL,
            data: elemtype,
            dataType: 'json'
        });
        request.then((response) => {
            renderMovies(response);
        });
        request.fail((error) => {
            $('#aboutError').modal({});
        });
    }

    function initApplication() {
        $('.noresult').hide();
        $('.carousel').carousel();
        choosingTypes();
    }

    $(document).ready(function($) {
        initApplication();

        $('#movies').click(function() {
            choosingTypes({ type: 'movie' });
        });

        $('#serials').click(function() {
            choosingTypes({ type: 'serial' });
        });
        $('#cartoons').click(function() {
            choosingTypes({ type: 'cartoon' })
        });
        $('#videos').click(function() {
            choosingTypes({ type: 'video' });
        });

    });