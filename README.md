# CityShare:
We used a cool piece of Redux middleware called [Redux-socket.io](https://github.com/itaylor/redux-socket.io). This let us dispatch redux actions both to and from our websocket server. All of the network calls in this app were done via websockets.

### Naming Convention / Architecture (MTN):

**Naming Convention:**
```
[MTN]: (Module__type__name):
    > Prefix with name of module [PascalCase]: (ex. 'Module.js')
    > Append with file type [lowercase]: (ex. 'Module__container.js')
    > End with unique descriptor [camelCase]: (ex. 'Module__container__usefulComponent.js')
    > Seperate with double underscores (ex. '__')
```

**Modules:**
```
  > Name after features
  > Start with capital letter
  > Contains Containers, Components, Styles, and Reducers
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
