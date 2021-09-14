# React and GoogleMaps API
_Search google places and select suggestions to set markers in the map, state markers are manage by redux._

## Features
 - Search places in google maps API
 - Add places as a marker in the map and its information

## Tech
This project uses a number of open source projects to work properly:

- [CRA] - To build project with Typescript
- [Redux] - Manage markers state

And of course itself is open source with a [public repository][Repository] on GitHub.

## Installation
Requires [Node.js](https://nodejs.org/) v14+  and [NPM](https://docs.npmjs.com/) v5.6 to run.
Install the dependencies and devDependencies and start the server.
```sh
cd [root_directory]
npm install
```

## Plugins

It is currently extended with the following plugins. Documentation on how to use them in your own application are linked below.

| PLUGIN | DOCUMENTATION |
| ------ | ------ |
| Font Awesome | [https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react][FontAwesome] |
| Jest | [https://github.com/facebook/jest][Jest] |
| Reach UI | [https://github.com/reach/reach-ui][ReachUI] |
| React Device Detect | [https://github.com/duskload/react-device-detect][ReactDeviceDetect] |
| React Google Maps API | [https://github.com/JustFly1984/react-google-maps-api][GoogleMapsAPI] |
| React Testing Library | [https://testing-library.com/docs/][ReactTestingLibrary] |
| StyledComponents | [Styled components documentation][StyledComponents] |
| Use Places Autocomplete | [https://www.npmjs.com/package/use-places-autocomplete][UsePlacesAutocomplete] |
| Web Vitals | [Web Vitals documentation][WebVitals] |


## Available Scripts
This project was bootstrapped with Create React App. In the root directory, you can run these kind of commands:

#### Run project
```
npm run start
```
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
The page will reload if you make edits. You will also see any lint errors in the console.

#### Run tests
```
npm run test
```
Launches the test runner in the interactive watch mode. 
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Run build
```
npm run build
```
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Run eject
```
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
To learn React, check out the [React documentation][ReactJs].


[Repository]: <https://github.com/DvidLpez/googlemaps-react>
[CRA]: <https://github.com/facebook/create-react-app>
[redux]: <https://github.com/reduxjs/redux>
[Jest]: <https://github.com/facebook/jest/>
[ReachUI]: <https://github.com/reach/reach-ui/>
[ReactDeviceDetect]: <https://github.com/duskload/react-device-detect>
[GoogleMapsAPI]: <https://github.com/JustFly1984/react-google-maps-api>
[FontAwesome]: <https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react>
[ReactTestingLibrary]: <https://testing-library.com/docs/>
[UsePlacesAutocomplete]: <https://www.npmjs.com/package/use-places-autocomplete/>
[StyledComponents]: <https://styled-components.com/docs>
[WebVitals]: <https://web.dev/i18n/en/vitals/>
[ReactJs]: <https://reactjs.org/>
