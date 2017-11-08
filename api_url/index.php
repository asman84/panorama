<?php
$movies = [
        [
          'name' => 'Titanic',
          'year' => 1999,
          'isNew' => true,
          'type' => 'movie',
          'genre' => 'comedy',
          'img' => 'application/bestPrice/img/slider33.jpg',
          'rating' => 1
        ],
        [
          'name' => 'NottingHill',
          'year' => 1990,
          'isNew' => true,
          'type' => 'cartoon',
          'genre' => 'Triller',
          'img' => 'img/photo2',
          'rating' => 2
        ],
        [
          'name' => 'Suyunchi-serial',
          'year' => 2017,
          'isNew' => false,
          'type' => 'serial',
          'genre' => 'Melodramma',
          'img' => 'img/photo3',
          'rating' => 2
        ],
        [
          'name' => 'Sakura-kino',
          'year' => 2016,
          'isNew' => false,
          'type' => 'movie',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 3
        ],
        [
          'name' => 'Sakura',
          'year' => 2016,
          'isNew' => false,
          'type' => 'cartoon',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 4
        ],
        [
          'name' => 'Sakur-serial',
          'year' => 2016,
          'isNew' => false,
          'type' => 'serial',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5
        ],
        [
          'name' => 'Yamamoto',
          'year' => 2016,
          'isNew' => true,
          'type' => 'movie',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5
        ],
        [
          'name' => 'Sakura',
          'year' => 2016,
          'isNew' => false,
          'type' => 'cartoon',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5
        ],
        [
          'name' => 'Interesting Video',
          'year' => 2016,
          'isNew' => false,
          'type' => 'video',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5
        ],
        [
          'name' => 'Sakura',
          'year' => 2016,
          'isNew' => false,
          'type' => 'cartoon',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5
        ],
        [
          'name' => 'Video-Rolik',
          'year' => 2016,
          'isNew' => true,
          'type' => 'video',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5
        ],
    ];
function filterMovie($movie) {
  if (isset($_POST['type'])) {
    return $movie['type'] === $_POST['type'];
  } else {
    return true;
  }
}
print json_encode(array_values(array_filter($movies, 'filterMovie')));


  ;