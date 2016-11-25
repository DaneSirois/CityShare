import React, {Component} from 'react';


class Message__component extends Component {
  render() {
    return (
      <li>
        <span> {this.props.username} ({msToTime(this.props.time)}):    {this.props.content}</span>
      </li>
    );
  };
};

function msToTime (s) {
  s = (new Date(s)).getTime();
  var days = (new Date(s)).getDay();
  var month = (new Date(s)).getMonth();
  var year = (new Date(s)).getFullYear();
  console.log(s);
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
