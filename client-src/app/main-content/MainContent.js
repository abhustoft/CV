import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux'

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Columns from 'grommet/components/Columns';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
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
      <App>
          <Box direction="row">
            <Box basis="1/3" pad="medium" align="center" justify="center" colorIndex="neutral-1">
              <Accordion>
                {paragraphs}
              </Accordion>
          </Box>
          <Box basis="2/3" pad="medium" align="center" justify="center">
            <Box basis="1/3" pad="medium" align="center" justify="center" colorIndex="neutral-2">

              a hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to textv

            </Box>
            <Box basis="2/3" pad="medium" align="center" justify="center" colorIndex="neutral-3">

              a hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to texta hole log to text

            </Box>
          </Box>
        </Box>
      </App>
    );
  }
});


function mapStateToProps(myState) {
  return {
    myState
  }
}

export default connect(mapStateToProps)(MainContent)
