    const API_URL = 'http://panorama/api_url/';

    function renderMovies(items) {
        if (items.length) {
            $('.mediaBox').empty();
            items.forEach(function(movie) {
                var movieTemplate = '';

                movieTemplate = '<div class="col-lg-3">\
                               <div class="my-4 movie-templete pos-r">\
                                  <img src="img/' + movie.img + '" class="">\
                                  <div class="py-1 px-2">\
                                      <h6 class="nameItem mb-0">' + movie.name + '</h6>\
                                      <span class="year">' + movie.year + ' , </span>\
                                      <span class="type">' + movie.genre + '</span>\
                                      <span class="rating float-right">';
                for (var i = 0; i < 5; i++) {
                    if (i < movie.rating) {
                        movieTemplate += '<span>☆</span>';
                    }
                }

                movieTemplate += '</span>\
                                    </div>';

                if (movie.isNew) {
                    movieTemplate += '<div class="new bg-danger text-center rounded-left">New</div>'
                }
                movieTemplate += '</div>\
                                  </div>';


                $('.mediaBox').append(movieTemplate);
            });
        } else {
            $('.noresult').show();
        }
    }

    // @TODO FUNCTION REQUESTmoVIES

    function initApplication() {
        $('.noresult').hide();
        $('.carousel').carousel();
        var movieRequest = $.ajax({
            method: 'POST',
            url: API_URL,
            data: {}
        });
        movieRequest.then((response) => {

            renderMovies(JSON.parse(response));
        });
        movieRequest.fail((error) => {
            $('#aboutError').modal({});
        });
    }

    $(document).ready(function($) {
        initApplication();

        // CLICK @TODO
        // REQEST
        // RENDER

        $('#movies').click(function() {
            var request = $.ajax({
                method: 'POST',
                cache: false,
                url: API_URL,
                data: {
                    type: 'movie'
                },
                dataType: 'json'
            });
            request.then((response) => {
                renderMovies(response);
            });
            request.fail((error) => {
                $('#aboutError').modal({});
            });
        });
    });