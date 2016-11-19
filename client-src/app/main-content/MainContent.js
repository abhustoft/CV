import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux'

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
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

    const paragraphs = this.state.profileTexts
      .map(function({Paragraph, Sequence}) {
        return (
          <AccordionPanel key={Sequence} pad="medium" heading="Konsulentprofil">
            <div>{Paragraph}</div>
          </AccordionPanel>
        );
      })
      .sort((a, b) => {return a.key - b.key;});
    return (
      <div>
        <Accordion>
            {paragraphs}
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
