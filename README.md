## P'unk Avenue Frontend Challenge - React Version by Sergio Cabral

In this version, the map of the city starts populated with the location of all the Indego Stations. Based on the color you can see how many bikes are available, this same number is shown as a label in the middle of the location marker. The user can see how many docks are available hovering over the marker to see the tool-tip containing this information. More information about the station, in this case the address, can be seen by clicking on the marker and an overlay with said information will appear.

You can find a live version of the app here: [Indego Locator](http://sergiocabral.io/punkave/)

### Tech Stack
* HTML
* CSS
* jQuery (v3.4.1)
* Bootstrap (v4.4.1)

## Project Description

Using HTML, CSS, and one of the following:

* Vanilla JavaScript
* jQuery

Create a single-page website/web application that displays bike share and weather information for people in Philadelphia using [Indego](https://www.rideindego.com) and [Open Weather Map](https://openweathermap.org/current#name) APIs.

## Requirements

The app:
* Asks the user for an address (you may use an input field)
* Displays the location of at least three nearby bike stations on a map (you may integrate Google Maps, Open Street Map, or another tool of your choice)
* Visually indicates the number of open docks and available bikes at each bike station
* Visually indicates the weather, and
* Displays a warning if the weather seems dangerous.

## APIs
[Indego](https://www.rideindego.com) is Philadelphia's bike-sharing program, with many bike stations in the city.

The [Indego GeoJSON station status API](https://www.rideindego.com/stations/json/) provides a realtime snapshot of the number of bikes available, number of open docks available (not currently containing a bike), and total number of docks at every station. This API is free and requires no API key.

> Hint: the API responds with a JSON object. You may find it easier to work out how to work with the data if you visit the API manually first and feed its output through a [JSON pretty printer](http://jsonprettyprint.com/) or similar tool. **Your actual app should access the API on its own.**

The [Open Weather Map API](https://openweathermap.org/current#name) provides a realtime snapshot of the current weather in a given city. Since Philadelphia is a small geographical area it is sufficient to obtain the weather for a geographical location central to Philadelphia. This API has a free plan, you will need to sign up for an API key. This API is well documented.

## Criteria

Your work will be evaluated primarily on:

* Consistency of coding style (ideally in harmony with our [JavaScript style guide](https://github.com/punkave/best-practices/blob/master/javascript.md))
* Idiomatic use of your chosen JavaScript library (or vanilla JavaScript)
* Good user experience (UX)
* General quality of code and technical communication.

## How to submit your work

Fork this project on github. When you're finished, send us the URL of your public repository. You should also include clear instructions to run the app and/or the URL of your running instance of the app (if you're hosting it). *Consider using `.gitignore` to avoid putting any deployment credentials or API key in your public repository.*

**If you prefer, you may submit your code to us privately by email,** rather than using a fork in your public github.

## Extra credit

* Host it:
  * Make your app available on a server that we can communicate with from the office, not just running it locally. Although this is not a system administration job, we're interested in seeing that you are comfortable with the fundamentals of making something live on a webserver. (Hint: Heroku, Now, Digital Ocean and Linode are all options to consider.)
* Ask the user whether they are looking for a bike, or a place to park one.
* Use color or some other means to emphasize when there are plenty of bikes/racks, or very few.
* Update in real time.
* Geolocation. (Hint: you must use https on your server, which takes some doing.)
* Use Vue or React, as a followup to your vanilla JS / jQuery project. If you choose to, please do this in a separate git branch, after you complete it with vanilla JS and jQuery. It's important to us to see how you'd structure the project without build tools that typically accompany such frameworks.
* Anything else you think is cool, relevant, and consistent with the other requirements.

## If you don't finish

We are most interested in your frontend development skills. If you have trouble with the APIs, focus first on building the application that would display that data, using mocked-up data at first, and add in real queries to the APIs at the end.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
