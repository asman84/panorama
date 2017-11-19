<?php
$movies = [
        [
          'name' => 'Titanic',
          'year' => 1999,
          'isNew' => true,
          'type' => 'movie',
          'genre' => 'comedy',
          'img' => 'application/bestPrice/img/slider33.jpg',
          'rating' => 1,
          'totalWatch' => 230,
          'details' => 'I saw this film in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'NottingHill',
          'year' => 1990,
          'isNew' => true,
          'type' => 'cartoon',
          'genre' => 'Triller',
          'img' => 'img/photo2',
          'rating' => 4,
          'totalWatch' => 18,
          'details' => 'Bred Pitt was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Suyunchi-serial',
          'year' => 2017,
          'isNew' => false,
          'type' => 'serial',
          'genre' => 'Melodramma',
          'img' => 'img/photo3',
          'rating' => 2,
          'totalWatch' => 523,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Sakura-kino',
          'year' => 2016,
          'isNew' => false,
          'type' => 'movie',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 3,
          'totalWatch' => 123,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Me and You',
          'year' => 2016,
          'isNew' => false,
          'type' => 'cartoon',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 4,
          'totalWatch' => 203,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'BBC-serial',
          'year' => 2016,
          'isNew' => false,
          'type' => 'serial',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5,
          'totalWatch' => 23,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Yamamoto',
          'year' => 2016,
          'isNew' => true,
          'type' => 'movie',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 3,
          'totalWatch' => 23,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Mimino',
          'year' => 2016,
          'isNew' => false,
          'type' => 'cartoon',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5,
          'totalWatch' => 23,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Interesting Video',
          'year' => 2016,
          'isNew' => false,
          'type' => 'video',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5,
          'totalWatch' => 23,
          'details' => 'This film was taken in Los Angeles, in 2015. Interesting Video was awarded 3 times'
        ],
        [
          'name' => 'Sakura',
          'year' => 2016,
          'isNew' => false,
          'type' => 'cartoon',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5,
          'totalWatch' => 23,
          'details' => 'This film was taken in Los Angeles, in 2015. Sakura was awarded 3 times'
        ],
        [
          'name' => 'Video2-Rolik',
          'year' => 2016,
          'isNew' => true,
          'type' => 'video',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5,
          'totalWatch' => 41,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Video3-Rolik',
          'year' => 2016,
          'isNew' => true,
          'type' => 'video',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 2,
          'totalWatch' => 54,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
        ],
        [
          'name' => 'Vassabi',
          'year' => 2016,
          'isNew' => true,
          'type' => 'video',
          'genre' => 'Melodramma',
          'img' => 'img/photo4',
          'rating' => 5,
          'totalWatch' => 17,
          'details' => 'This film was taken in Los Angeles, in 2010. Mimino was awarded 13 times'
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