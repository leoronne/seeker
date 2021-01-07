<p align="center">
  <img src="client\src\assets\img\transparentBanner.png" width="50%"/>
</p>

<br>

<div align="center" style="margin: 20px; text-align: center">

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
![GitHub last commit](https://img.shields.io/github/last-commit/leoronne/seeker?color=green&style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/leoronne/seeker?style=flat-square)

</div>

##

<p align="center">
  <a href="#project-star2">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs-rocket">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#general-information-and-functionalities-information_source">General Information and Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation-wrench">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#start-on">Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test-heavy_check_mark">Test</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license-memo">License</a>
</p>

##

<p align="center">
  <img src="src\assets\img\banner.png" />
</p>

<br>

## Project :star2:

This repo contains an application named Seeker, it lets you search through a immersive Comic Book characters database.

<br>

Deployed [here](https://seeker.ronne.dev/).

<br>

<p align="center">
  <img src="client\src\assets\img\project-1.gif"/>
</p>

<br>

<p align="center">
  <img src="client\src\assets\img\project-2.gif"/>
</p>

<br>

<p align="center">
  <img src="client\src\assets\img\project-3.gif"/>
</p>

<br>

## Techs :rocket:

- [x] [ReactJS](https://reactjs.org);
- [x] [Node.js](https://nodejs.org/);
- [x] [TypeScript](https://www.typescriptlang.org/);
- [x] [Styled Components](https://styled-components.com/).

<br>

## General Information and Functionalities :information_source:

Since the Comic Vine has a CORS policy, this application uses a backend service to make the requests to the Comic Vine API (server side). So the front-end makes the requests to the backend server and the backend handle the requests to the real API and returns the data.

The application has two languages implemented (Portuguese-BR and English-USA), the user can easily alter it on the Header of the page. But it doesn't affect the data received from the API (since Comic Vine does not have this functionality implemented, unfortunatelly).

On the Homepage the user can control the pagination and records shown per page, the default is set to 10 to not overload the API response (I preferred to implement this instead of the "View Results" button, so the user can control what he actually wants to see and how). He can also see some basic character's information (thumbnail, name, and publisher) and add/remove it from his favorite list.

The user can also filter the results by name and those which are on his favorite list.

On the Character Info page, the user has the hability to alter the character's data (name, real_name, aliases, origin, gender, publisher, count_of_issue_appearances and birth) and add the character to his favorite list, these changes persist in the Redux state throughout the entire application.

There is also a Not Found Page if the user tries to access a route that doesn't exists.

<br>

## Installation :wrench:

First you need to clone the project using `git clone https://github.com/leoronne/seeker.git`.

Then you can install the application using `npm install` or `yarn install` on the client and server directory.

<br>

## Start :on:

To start the application <strong>interface</strong> just run `npm run start:web` or `yarn start:web` on the root dir of this repo.

To start the application <strong>server</strong> just run `npm run dev:server` or `yarn dev:server` on the root dir of this repo.

<strong>Note: you need to create a .env file on the [server directory](https://github.com/leoronne/seeker/blob/master/server/.env.example) and one on the [client directory](https://github.com/leoronne/seeker/blob/master/client/.env.example) based on the example files.

You can generate the Comic Vine API Key [here](https://comicvine.gamespot.com/api/).

</strong>

<br>

## Test :heavy_check_mark:

Only the front-end of this application has tests implemented.

To run it, just run `npm run test:cover` or `yarn test:cover` on the client directory, it will generate a coverage report on the same dir.

<br>

## License :memo:

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](https://github.com/leoronne/seeker/blob/master/LICENSE)**;
- Copyright 2020 © <a href="https://github.com/leoronne" target="_blank">Leonardo Ronne</a>.

##
