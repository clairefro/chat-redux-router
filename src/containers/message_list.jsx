import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions/index';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.channelFromParams);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <h3>Channel #{this.props.channelFromParams}</h3>
        </div>
        <hr/>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message, index) => {
              return <Message key={index} message={message} />;
            })
          }
        </div>
        <MessageForm channelFromParams={this.props.channelFromParams}/>
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
