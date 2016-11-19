import React, {Component} from 'react';
// var sanitizeHtml = require('sanitize-html');

class Update extends Component {

  render() {
    return(
      <div className="update">
        <span className="content"><div dangerouslySetInnerHTML={this.props.content} /></span>
      </div>
    );
  }
}

export default Update;