# PropertyApp
This Realestate Property Saver application displays the listed 	properties and you can select any property and add it to your own Saved Property List. You can also remove a property from 	the Saved Property List.

1.	Getting Started
	You can fork the project from my GitHub account - https://github.com/vidishj/PropertyApp

2.	Run the application
	To run the application, you can just double click on ‘index.html’.  
	
	Note: The application might not run as expected if the user does not save it on the local server because some browsers (mainly Google Chrome) do 	not support XMLHttpRequest cross origin requests.
 
3.	Directory Layout
	app/
		controller/
			controller.js  - -> Application controller file
		css/
			style.css          - -> Main stylesheet
			style.css.map - -> File used by Koala to convert .scss file to .css
		scripts/ 
			angular.min.js - -> Angular JS file
			angular.mocks.js - -> Angular JS file
			app.js              - -> File used to declare the app module
		scss/
			style.scss - -> SCSS file used for the application
			style.map.css - -> File used by Koala to process .scss file
			style.css - -> File used by Koala to process .scss file
		index.html - -> The main HTML file of the application
		properties.json - -> JSON file containing the property objects
		saved-properties.json - -> JSON file containing the saved property objects
	README.doc	- -> Readme file
