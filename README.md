# MovieCatalog

# To Run the app:

->Clone OR Download.

->Go to root folder (using nodeJS prompt).

->Run  

    $ bower install
  
    $ npm install
  
    $ gulp serve
  

# Approach: 
AngularJS 1.5, HTML 5, CSS 3, Bootstrap

Jasmine, Karma, Protractor

Gulp, Bower, npm

# Future improvements:
-> More tests !!

-> More jazzy UI !! (eg: showing loder when click on search, animations for the modal and the movie images)

-> Lazy Loding of the movie images. Currently they are displayed async, but showing a small loader and lazy loading after the data would be more suitable.

-> Handling "no images" and "no ratings" scenarios: For some movies OamdbAPI does not return movie posters and imdb ratings which need to handled more gracefully (say show a default image) 
