import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as action from '../Shared/actions/index.js';
import style from './styles/index.css';

class NewChannelButton__container extends Component {
  render() {
    return (
      <div className={style.NewChannelButton__container}> 
          <i className={[style.NewChannelButton__icon, "fa fa-plus"].join(" ")} aria-hidden="true"></i>
      </div>
    );
  };
};

const mapStateToProps = function (state) {
  return {
    current_formState: state.Channel.current_formState
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleButtonClick: () => {
      if (current_formState === "CLOSED") {
        dispatch(action.TOGGLE_FORM("OPEN"));
      } else {
        dispatch(action.TOGGLE_FORM("CLOSE"));
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelButton__container);