Videogular Questions Example
============================

Requirements
------------

* [Node.js](http://nodejs.org/) - JavaScript platform built on chromes JavaScript runtime
* [npm](https://www.npmjs.org/) - package manager for Node.js
* [bower](http://bower.io/) - A package manger for the web

Installation
------------

npm and Node.js should be available from your Linux package manager.

Once npm and Node.js is installed you can install bower with `npm install bower`

Setup
-----

`npm install` can be run to install the npm dependencies.

Running
-------

Once installed the Web server can be run with `npm start`.  By default the
server is started on [http://localhost:8000](http://localhost:8000) and the app
can be accessed by visiting the [/app](http://localhost:8000/app/) directory.

The automated testing can be run with `npm test`.
This requires Google chrome with the default settings.

For `npm start` to work you need to be on a stable version of the repository.
The latest stable version is v0.2.0 and can be checked out with `git checkout
v0.2.0`.

Test Video
----------

The test video that is used is not included in the repository. It should be
downloaded when you install the packages.

However if the test video has not been downloaded it can be downloaded with
`npm run-script video-download`

Configuring an Apache webserver to run this application
=======================================================

AngularJS files are JavaScript and therefore can be run on a normal Apache webserver.

To install this you must clone the repository to a location served by apache and then install the dependencies by running `npm install`

Once this has been performed the application will be able to be used.
