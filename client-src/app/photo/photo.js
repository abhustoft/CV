import * as React from 'react';
import * as ReactDom from 'react-dom';
import { togglePhoto } from '../redux/actions'

var Photo = React.createClass({
  componentDidMount: function() {
    console.log('Phto component rendered');
  },
  render: function() {
    const {dispatch, showPhoto} = this.props;
    const viewClass = showPhoto.show ? '' : 'cv-hidden';
    const cvClass = `cv-photo ${viewClass}`

    const togglePhotoView = function () {
      dispatch(togglePhoto());
    };

    return (
      <div className={cvClass}
           onClick={togglePhotoView}>
        <img className="cv-photo__image" src="app/images/consultant.jpg" alt="Picture of the consultant"/>
      </div>
    );
  }
});

export {Photo}
