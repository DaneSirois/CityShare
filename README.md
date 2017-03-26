# CityShare:

Custom created the architecture and naming convention. In hindsight there are certainly a few things that I'd do differently, but it was a cool experiement nonetheless.

We used a cool piece of Redux middleware called [Redux-socket.io](https://github.com/itaylor/redux-socket.io). This let us dispatch actions both to and from our websocket server. All of our network calls in this app were done using websockets.

### Usage:

```
> Fork: https://github.com/DaneSirois/StanleyPark,
> Pull your fork,
> Make Git branches mimic modules
```

Install the dependencies and start the server.

```
> npm install
> npm start
> open http://localhost:3000
```

### Naming Conventions:

```
Modules:
  > Name modules after features
  > Module names start with a capital letter

Files:
  Follow the (MTN) naming convention (module__type__name):
    > Prefix files with the name of their module (ex. 'Module')
    > Follow with the type of file using lowercase (ex. 'Module__container')
    > End with a unique name using camelCase (ex. 'Module__container__myContainer')
    > Seperate each part with double underscores
```

### Dependencies:

* React
* Redux
* React-Redux
* Redux-socket.io
* Socket.io
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
