import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions/index';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    // dispatch an action to udpate flats in Redux state tree
    this.props.setMessages();
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-content">
          {
            this.props.messages.map((message, index) => {
              return <Message key={index} message={message} />;
            })
          }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    messages: reduxState.messages
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
