# CityShare:

Custom created the architecture and naming convention. In hindsight there are a few things that I'd do differently, but it was a cool experiement nonetheless

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

-Contrived by @DaneSirois

Why? Scalablility. The benefits of this naming convention become aparant as the app starts to scale. It's inherit binding of a file to a specific area of your app makes searching for things a breeze. Once you learn the convention, it makes identifying new files easier as well. On a large scale application, the added meta info and structure help make the process of working on forign areas of your app easier too.

### Dependencies:

* React
* Redux
* React-Redux
* Redux-socket.io
* Socket.io
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
