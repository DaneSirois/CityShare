StanleyPark App:
==========================================
The Hyper Local Social Networking Service


### Usage

```
> Fork: https://github.com/DaneSirois/StanleyPark,
> Pull your fork,
> Make branches which mimic modules
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Naming Conventions

```
Modules:
> Name modules after features
> Module names start with a capital letter

Files:
> Name files following the mountain(MTN) naming convention (Module__type__name)
> Prefix files with the name of their module (ex. 'Module')
> Follow with the type of file that they are in lowercase (ex. 'Module__container')
> Prepend with the unique name of that file using camelCase (ex. 'Module__container__myContainer')
> Seperate each part with double underscores
```

### Linting

This project includes React ESLint configuration.

//
npm run lint
```

<!-- ====== Dependencies ====== -->

* React
* Redux
* React-Redux
* Redux-socket.io
* Socket.io
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
