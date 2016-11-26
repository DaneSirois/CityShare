import React, {Component} from 'react';
import { Link } from 'react-router';
import style from './styles/index.css';

class BackButton__container extends Component {
  render() {
    return (
    	<Link to={"/"}>
	      <div className={style.BackButton__container}>	
	        	<i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
	      </div>
      </Link>
    );
  };
};

export default BackButton__container;