import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.ajaxCallsInProgress > 0} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  ajaxCallsInProgress: PropTypes.number.isRequired
};

export default connect(state => ({ ajaxCallsInProgress: state.ajaxCallsInProgress}))(App);
