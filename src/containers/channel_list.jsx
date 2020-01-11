import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMessages } from '../actions/index';

class ChannelList extends Component {
  // fetch channel messages on each prop change (only if clicked channel differs from selected)
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.setMessages(nextProps.channelFromParams);
    }
  }

  render() {
    const { channels } = this.props;

    return (
      <div className="channel-list-panel">
        <h3>Redux Chat</h3>
        <div className="channel-list">
          {
            channels.map((channel) => {
              return <p
                key={channel}
                className={this.props.channelFromParams === channel ? 'selected': ''}
                >
                  <Link to={`/${channel}`}>
                    #{channel}
                  </Link>
                </p>
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
    channels: reduxState.channels
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
