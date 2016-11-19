import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux'

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
// require ('../../node_modules/grommet/grommet.min.css');
require('./MainContent.styl');

var MainContent = React.createClass({
  loadProfileText: function() {
    fetch('/api/ProfileTexts')
      .then(response => response.json())
      .then(json => {
        this.setState({profileTexts: json});
      });
  },

  loadName: function() {
    fetch('/api/Names')
      .then(response => response.json())
      .then(json => {
        this.setState({name: json});
      });
  },

  getInitialState: function() {
    return {
      profileTexts: [],
      name: []};
  },

  componentDidMount: function() {
    this.loadProfileText();
    this.loadName();
  },
  render: function() {
    const {dispatch, myState} = this.props;
    console.log('Main content got state:', myState);

    const paragraphs = this.state.profileTexts
      .map(function({Paragraph, Sequence}) {
        return (
          <div key={Sequence}>
            <p>{Paragraph}</p>
          </div>
        );
      })
      .sort((a, b) => {return a.key - b.key;});
    return (
      <div>
        <Accordion>
          <AccordionPanel heading="First Panel">
            <p>{paragraphs}</p>
          </AccordionPanel>
          <AccordionPanel heading="Second Panel">
            <p>{paragraphs}</p>
          </AccordionPanel>
        </Accordion>

      </div>
    );
  }
});


function mapStateToProps(myState) {
  return {
    myState
  }
}

export default connect(mapStateToProps)(MainContent)
