import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css'

function randomColor(){

  const random = Math.random() * 100;
  if (random >= 0 && random < 20) {
    return "rgba(255, 0, 0, 0.25)";
  } else if (random >= 20 && random < 40) {
    return "rgba(0, 255, 0, 0.25)";
  } else if (random >= 40 && random < 60) {
    return "rgba(0, 0, 255, 0.25)";
  } else if (random >= 60 && random < 80) {
    return "rgba(255, 255, 0, 0.25)";
  } else {
    return "rgba(0, 255, 255, 0.25)";
  }
}

class Tile__container extends Component {

  produceImgLink(id) {
    return `background-image: ${this.props.img_url}`
  }

  renderHeadline(headline) {
    if (headline) {
      return headline.name
    }
  }

  render() {
    return (
      <div className={style.tile} style={{backgroundImage: `url(${this.props.img_url})`}}>
        <div className={style.overlay} style={{backgroundColor: this.props.channelData.color}}>
          <div className={style.headerOverlay}>
            <span className={style.headline}>
              {this.props.headline}
            </span>
          </div>
        </div>
        <footer className={style.footer}>
          <span className={style.channelName}>
            {this.props.channelData.name}
          </span>

          <span className={style.userCount}>
            <i className="fa fa-commenting-o" style={{"paddingRight": "7px"}} aria-hidden="true"></i>
            {this.props.userCount}
          </span>
        </footer>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    messageAlert: state.Portal.messageAlert,
  });
};


export default connect(mapStateToProps)(Tile__container);