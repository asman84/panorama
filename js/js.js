    const API_URL = 'http://panorama/api_url/';

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

        } else {
            $('.noresult').show();
        }
    }

    function showPlayer(item) {
        var player = '';
        player = '<div class="col-sm-12">\
                      <video>\
                        <source src="video/1.mp4" type="">\
                      </video>\
                  </div>';
        return player;
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
        $('.mediaBox').click(function(item) {
            var request = $.ajax({
                method: 'POST',
                cache: false,
                url: API_URL,
                data: { media: item.name },
                dataType: 'json'
            });
            $(showPlayer(item)).insertAfter(this);
        });

    });