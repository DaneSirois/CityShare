import React, {Component} from 'react';
import style from './styles/index.css'

function randomColor(){
  var random = Math.random() * 100;
  if (random >= 0 && random < 20) {
  return "rgba(255, 0, 0, 0.35)";
  } else if (random >= 20 && random < 40) {
  return "rgba(0, 255, 0, 0.35)";
  } else if (random >= 40 && random < 60) {
  return "rgba(0, 0, 255, 0.35)";
  } else if (random >= 60 && random < 80) {
  return "rgba(255, 255, 0, 0.35)";
  } else {
  return "rgba(0, 255, 255, 0.35)";
  }
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
