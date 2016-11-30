import React, {Component} from 'react';
import style from './styles/index.css';
class Message__component extends Component {
  render() {
    return (
      <li className={style.message}>
        <span className={style.meta}>
          <span className={style.username}>{this.props.username} </span>
          <span>: </span>
        </span>
        <span className={style.content}>{this.props.content}</span>
      </li>
    );
  };
};

function msToTime (s) {
  s = (new Date(s)).getTime();
  var days = (new Date(s)).getDate();
  var month = (new Date(s)).getMonth() + 1;
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

export default Message__component;
