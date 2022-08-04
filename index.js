/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are movie titles.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  !movies.length ? _throw("No Movies Detected") : null
  //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
  return movies.map(movie => movie.title)
  /*
  Instructions told me to return so I went directly to that option. I'm pulling the Parameter movies and mapping through it using the newly created variable movie. From there I will map through and find the title. 
  */
}

/**
 * checkIfAnyMovieHasRating()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the movies has been given the provided rating. If the inputted `movies` array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} [rating="G"] - A movie rating. Defaults to "G".
 * @returns {boolean|Error} Returns `true` if a movie exists in the list with the given rating, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "G");
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyMovieHasRating(movies, "R");
 *  //> false
 */
function checkIfAnyMovieHasRating(movies, rating = "G") {
  !movies.length ? _throw("No Movies Detected") : null
   //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
  return movies.some(movie => movie.rated === rating)
   /*
  Instructions told me to return so I went directly to that option. I'm pulling the Parameter movies using the some method I check through the newly created variable movie to see if the movie rated is equal to the default rating of G.
  */
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty, throw an error with a message. If the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|Error|null} The movie object with the matching `imdbID`.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  !movies.length ? _throw("No Movies Detected") : null
   //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
  let ID = movies.find(movie => movie.imdbID === id)
  return (!ID) ? null : ID
    /*
  The instructions told me I need to return the ID null or an error. Since I already handled the error I created a varible that is equal to the param movies using the find method to see if imdbID is the same as ID if it wasn't I returned the desired response. 
  */
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty, throw an error with a message. If no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]|Error} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  !movies.length ? _throw("No Movies Detected") : null
   //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
  return movies.filter(movie => movie.genre.toUpperCase().includes(genre.toUpperCase()))
    /*
  Instructions told me to return so I went directly to that option. I'm pulling the Parameter movies and filtering through it using the newly created variable movie. I am using movie to check inside of the genre and being sure its case sensitive using toUp. I wasn't sure how to be inclusive without using includes and so I repeated the process. I'm a bit confused why it didn't allow me to create a variable since I know I would be repeating the process. Please see previous commit for example. 
  */
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]|Error} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  !movies.length ? _throw("No Movies Detected") : null
   //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
  return movies.filter(movie => parseInt(movie.released.split(" ")[2]) <= year)
    /*
  Instructions told me to return so I went directly to that option. I'm pulling the Parameter movies and filtering through it using the newly created variable movie. I wanted to compare the year to the release but in the test its a string so I used ParseInt to make them numbers. I used split to account for the spaces and it needed to be two because you have to have an even split. 
  */
}

/**
 * checkMinMetascores()
 * -----------------------------
 * Returns either true or false depending whether all movies have a minimum metascore. If the movie array is empty, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} metascore - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinMetascores(movies, 90));
 *  //>  false
 */
function checkMinMetascores(movies, metascore) {
  !movies.length ? _throw("No Movies Detected") : null
   //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
  return movies.every(movie => metascore <= movie.metascore)
    /*
  Instructions told me to return so I went directly to that option. I'm pulling the Parameter movies and mapping through it using every and the newly created variable movie. from there I just see if the param metascore is equal to less than which is a true or false question. 
  */
}

/**
 * getRottenTomatoesScoreByMovie()
 * -----------------------------
 * Transform each movie, returning an array of objects where the key is the title of the movie and the value is the score received from Rotten Tomatoes. If there are no movies, throw an error with a message.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object[]|Error} An array of movie objects where the key is the movie title and the value is the score received from Rotten Tomatoes.
 * 
 * NOTE: You must use both the `.map()` method and the `.find()` method.
 *
 * EXAMPLE:
 *  getRottenTomatoesScoreByMovie(movies);
 *  //> [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
 */
function getRottenTomatoesScoreByMovie(movies) {
 !movies.length ? _throw("No Movies Detected") : null
  //Checking if the inputted movies array is empty. In that case will present an error message. Since it is a ternary operation it needs a true or false option so null is put in place.
 return movies.map(movie => {
 let scoreReceived = movie.ratings.find(score => score.source === 'Rotten Tomatoes')
 return {[movie.title]: scoreReceived.value}
   /*
  Instructions told me to return so I went directly to that option. I'm pulling the Parameter movies and mapping through it using the newly created variable movie but since it wont allow me to create the assisting variable outside the function I checked back to my notes and saw Carlos taught me to do it inside. I created a variable named scoresReceived from there recalled movie searched through ratings to find (using find) the score which is why I named the proceeding variable as such. From there I checked if the source or said score is equal to rotten tom which was requested and if so made another return that matched the example given. 
  */
})
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  checkMinMetascores,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
};
