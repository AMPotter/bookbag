# bookbag
Böokbag is a simple app. You tell it what you're reading and it gives you two similar books for you to enjoy.

##NAMES: *The Bookbag team consists of John Grillo, Haley Tortorella, Andrew Potter and Anwar Montasir. The goal is to pare down giant lists and keep reading suggestions fun and simple.*

##NUMBERS: We have four people:
1. John Grillo
2. Haley Tortorella
3. Andrew Potter
4. Anwar Montasir

## PITCH:
 __The Bookbag team wishes to make reading simple and fun again. Options can be overwhelming! We want to make a single-page application that takes in a book title and returns two books of similar nature. The target is for people who are already in a bookstore and want two viable alternatives for book they like or are already considering.__
 __Our plan involves using the Amazon API and possibly the Google Books or iDreambooks API. The Amazon API will be used to fetch book data requests and additional "Soso also bought $someBook" to make reccomendations for the reader.__

### MVP: The team's Minimal Viable Product is to produce:
1. Mobile-friendly website.
2. Takes in user input based on title
3. Return two books of similar nature to the user
..* Based upon Amazon API for reccomendations
..* Filter out title & author for similar works. No repeats.
4. (RESULTS PAGE)...With a picture of the book, author name as well as the ISBN.
5. Include our names & links to github profiles in the footer of the website.
6. Database for 'bookbag' feature. If user likes the book, we can store it in a database.
..* Store in SQL database. Columns are: Title, Author, ISBN.
..* This counts as an interaction that we can store.
..* Label ideas: 'Bag it!'; heart-button; 'Add'; 'Add to bag';

### SKETCHES:
See meatspace paper.




### OUR STRETCH GOALS:
1. Create a "Something different/This sucks" button to generate two near random, but dissimilar books based on author/category.
..*Filtering by Amazon API
2. Differentiate a review from Guy Average/Rando Calrissian and have a professional reviewer make their selection
3. RESULTS PAGE: Include a review blurb
4. RESULTS PAGE: Include a purchase link to the relevant book
5. Include a 'category' column in our back-end SQL database.
6. SUPER STRETCH: Reference local libraries for the book as well.
7. SUPER STRETCH: Use Google API to create an embed page so people could read the first few pages or whatever Google's API supports.
