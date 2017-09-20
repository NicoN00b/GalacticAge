# Solaris, the Age Conversion Calculator

#### This application converts the user's Earth age to that of other planetary bodies. 9.20.17

#### By NicoN00b

## Description

The program utilizes the moment package to capture time and display it on the page. Other time values come from the Date() Object.  It relies on an extensive list of dependencies through Node.js and Bower.

## Specs

| Behavior | Example Input | Example Output |
| -------- | ------------- | -------------- |
| User enters their birth date and the program returns their age in seconds |  9 9 1985 | 10097821600 |
| User enters their birth date and the program returns their age in years, days, hours, minutes, and seconds |  9 9 1985 | You are 32 years, 11 days, 14 hours, 21 minutes, 0 seconds, and counting. |
| User enters their birth date and the program returns their age on Mercury |  9 9 1985 | On Mercury, you are 133.465644 years old. |
| User enters their birth date and the program returns their age on Venus |  9 9 1985 | On Venus, you are  51.664120 years old. |
| User enters their birth date and the program returns their age on Mars |  9 9 1985 | On Mars, you are 17.038167 years old. |
| User enters their birth date and the program returns their age on Jupiter |  9 9 1985 | On Jupiter, you are 2.700822 years old. |



## Setup/Installation Requirements

Fork and Clone Repo.
Run npm install
Run bower install
Run gulp build
--at this point, the terminal should inform you of any missing dependencies and what command will add them.
Run gulp serve
Now you should be able to interact with the site (works best with Chrome).

If you would like to run the tests, please run npm test after gulp build.  You will receive results in the terminal and in Chrome via Karma

## Known Bugs

I cannot get the Difference Form to Show results, though all values are returned with console.log. Date form calendar entry does not work with Firefox.

## Support and contact details

email nicholas.raethke@gmail.com with any suggestions

## Technologies Used

git, github, atom, jquery, node.js, bower, jasmine, karma, jshint, browserify, and many more dependencies were used to build this app.

### License

consider this Creative Commons & Open Source, use at your own risk and promote self-determination and conviviality.
