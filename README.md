# NBA Stats

![](https://travis-ci.org/francopan/nba-base-app.svg?branch=master)

This app fetches an api of NBA Stats and provides a friendly user-interface for the fans.
Demo: [https://francopan-nba-stats.herokuapp.com/](https://francopan-nba-stats.herokuapp.com/)

## Development Server

To run a development web-server, just run the command line below. The application will start and it will be accessible through http://localhost:3000.

~~~
npm run start
~~~

## Build

In order to build this app, just run the command line below. It will start a grunt task described in **gruntfile.js**.
A folder called **dist** will be created. Just need to move it into a web-server (like apache or nginx).
~~~
npm run build
~~~

If you want to build without minifying javascript code, (e.g. for debug purpose) add a "pretty" selector.
~~~
npm run build:pretty
~~~

### Build with Docker
In order to build an image for docker, just run the command line below
~~~
docker build . -t baseapp
~~~

And to run, simply run the app and then expose the port you want to. And that's it, with the command bellow the application will be available in http://localhost.
~~~
docker run -p 80:80 baseapp
~~~
