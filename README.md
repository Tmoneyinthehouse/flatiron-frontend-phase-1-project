# flatiron-frontend-phase-1-project

My Flatiron Frontend Phase 1 Project - Ten NBA All Stars

--Description-- This is my project for Phase 1. This single page application will allow users to view ten of the NBA's top all stars. Users can like their favorite players that are generated from the collection, and the likes will be updated in real time without the need for page reloads. This application fetches player data from a db.json file (included in the app) and dynamically renders players cards with their names, images, and like counts. The layout is pretty basic but my goal is to update it with some CSS styling and more content (player stats) in the future.

--How to run-- Clone the repository from GitHub to your local machine. From there you'll want to open the index.html file in your web browser. The final step is the run the json server to utilize the data in the db.json file included in the application. Just run json-server --watch db.json in your terminal.

--Using the application-- This application runs similar to that of Toy Tale. There is a db.json file that contains an array of objects (players). These objects include a number of stats to coincide with each player. To add a new player to the collection, type in the player's first and last name on the 'Name' search bar and copy and paste the image url of said player (found in db.json file) into the 'Image URL' search bar. This should generate a player card that includes their name, image, and a like counter. If said player is your favorite, hit the like button.

--Known Issues--

-Images might not display correctly if the URLs are invalid or inaccessible.
-Cards don't display other stats found in db.json file (age, points, games played, rebounds, etc. )

--Future Enhancements--

-Implement stats for displayal on player cards
-Update css stylesheet for enhanced UI experience
