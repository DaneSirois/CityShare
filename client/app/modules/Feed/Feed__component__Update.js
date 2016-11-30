import React, {Component} from 'react';

import style from './styles/index.css';

function msToTime (s) {
  s = (new Date(s)).getTime();
  var days = (new Date(s)).getDay();
  var month = (new Date(s)).getMonth();
  var year = (new Date(s)).getFullYear();
  var ms = Number(s) % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  s = (s - mins) / 60;
  var hrs = s % 24;
  s = (s - hrs) / 24;
  return year + "/" + month + "/" + days + ' ' + hrs + ':' + mins + ':' + secs;
};

class Update__component extends Component {
  render() {
    return (
      <li className={style.Headline__update}>
        <header className={style.Headline__update__header}>
          <span className={style.Headline__update_time}>({msToTime(this.props.created_at)}): </span>
        </header>
        <div className={style.Headline__update__body}>
          <span className={style.Headline__update_content}>> {this.props.content}</span>
        </div>
      </li>
    );
  };
};


export default Update__component;
