
Setup
============

Requirements
------------

* [nodejs](http://nodejs.org/) - JavaScript platform built on chromes JavaScript runtime
* [npm](https://www.npmjs.org/) - package manager for nodejs
* [bower](http://bower.io/) - A package manger for the web

Installation
------------

npm and nodejs should be available from your Linux package manager.

Once npm and nodejs is installed you can install bower with `npm install bower`

Setup
-----

`npm install` can be run to install all dependencies.

Running
=======

Once installed the webserver can be run with `npm start`.
By default the server is started on [http://localhost:8000](http://localhost:8000) and the app can be accessed by visiting the [/app](http://localhost:8000/app/) directory.

The automated testing can be run with `npm test`.
This requires Google chrome with the default settings.

Development Run
---------------

videogular-questions should be installed in the same directory as videogular-questions-examples.
Running `npm run-script startdev` will start it in development mode which links videogular-questions in the above directory instead of downloading the most recent tagged version from the server.

This will let you dev on the videoangular-questions without committing and tagging commits to get bower to install it.
