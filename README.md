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

The [Videogular Analytics](https://github.com/soton-ecs-2014-gdp-12/videogular-analytics) and [Videogular Questions](https://github.com/soton-ecs-2014-gdp-12/videogular-questions) modules specified in the `bower.json` file have not been released yet. To get them, clone their repositories and run `bower link` in the root of each repository. Then, in the `videogular-questions-example` directory, tell Bower to use your local copies:

```sh
$ bower link videogular-questions
$ bower link videogular-analytics
```

Running
-------

Once installed the Web server can be run with `npm start`.
By default the server is started on [http://localhost:8000](http://localhost:8000) and the app can be accessed by visiting the [/app](http://localhost:8000/app/) directory.

The automated testing can be run with `npm test`.
This requires Google chrome with the default settings.

For `npm start` to work you need to be on a stable version of the repository.
The latest stable version is v0.2.0 and can be checked out with `git checkout v0.2.0`.

Test Video
----------

The test video that is used is not included in the repository. It should be downloaded when you install the packages.

However if the test video has not been downloaded it can be downloaded with `npm run-script video-download`
