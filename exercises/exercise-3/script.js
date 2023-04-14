/*

Exercise 3
----------

- Complete tasks 1-3. Task 4 is an optional extra.
- Open index.html using Live Server

You are given the following list of movies.

*/

const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

/*

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and for each movie, it creates a <p> element with the movie title and director and append it to the #allMovies div.
- it sets the innerText of the #moviesNumber element to the total number of the movies in the array "movies"

*/
const moviesNumber = document.querySelector("#moviesNumber");
const allMovies = document.querySelector("#allMovies");
function showMovies() {
  movies.forEach((movie) => {
    let pElement = document.createElement("li");
    pElement.textContent = `${movie.title} directed by ${movie.director} `;
    allMovies.appendChild(pElement);
  });
  moviesNumber.innerText = movies.length;
}
/*

Task 2
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite
 movie following using the "myMovies" objects as a guide
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to 
achieve that
Call addMovie to add the new movie to the list and then showMovies to see the movies added on
 the screen.
How many movies can you see on your page?

*/

const myFavMovie = {
  title: "Knockin' on Heaven's Door",
  director: "Thomas Jahn",
  type: "crime tragicomedy film",
  haveWatched: false,
};

function addMovie(movie, callback) {
  setTimeout(function () {
    movies.push(movie);
    callback();
  }, 2000);
}
addMovie(myFavMovie, showMovies);
/*

Task 3
Can you change the addMovie function to make sure the new movie you just added is showing on the screen?
Hint: use callbacks

*/

/*

Task 4 - **Extra**
- On the form with id #addMovies, add a "submit" event listener
- When the button is clicked you need to:
    - Read all input field values and create a new movie object literal with title, director, type and haveWatched properties
    - Push the new object on the movies array
    - Display the updated list of movies on your page

Hint: Use the functions you created on tasks 1-3

*/
