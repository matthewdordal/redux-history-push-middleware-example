import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { updateName } from './store/reducers/name';

export class Home extends Component {
  handleUpdateName = (e, name, meta) => {
    this.props.updateName(name, meta)
  }

  render () {
    const { firstName } = this.props

    return (
      <div>
        <p> First Name:: {firstName}</p>
        <ul>
          <li> <a onClick={(e) => this.handleUpdateName(e, 'Matt', { test: '/hi' })}>Matt</a></li>
          <li onClick={(e) => this.handleUpdateName(e, 'Anders', { pushToRoute: '/about'})}>Anders</li>
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { name } = state;
  const { firstName } = name

  return {
    firstName
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
