// Import Dependencies:
import React, {Component} from 'react';
import styles from './styles/index.css';
import Widget__container from './Widget__container__WidgetBar.js';
// Root Component:
class Widget__module extends Component {
  render() {
    return (
      <div className={styles.container}> 
      	<Widget__container />
      </div>
    );
  };
};

export default Widget__module;