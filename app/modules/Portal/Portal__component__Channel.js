import React, {Component} from 'react';
import style from './styles/index.css'

function randomColor(){
    // pick a "red" from 0 - 255
var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
var b = Math.floor(Math.random() * 256);
return "rgba(" + r + ", " + g + ", " + b + ", 0.35)";
}

class Channel__component extends Component {

  produceImgLink(id) {
    return `background-image: ./img/tile${id - 29}.jpg`
  }

  render() {
    return (

      <div className={style.tile} style={{backgroundImage: `url(./modules/Portal/img/tile${this.props.channelData.id - 29}.jpg)`}}>
        <div className={style.overlay} style={{backgroundColor: randomColor()}}>
          <span className={style.headline}>
          </span>
        </div>
        <footer className={style.footer}>
          <span className={style.channelName}>
            {this.props.channelData.name}
          </span>
        </footer>
      </div>
    );
  };
};


export default Channel__component;
