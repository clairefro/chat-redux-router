import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions/index';

class ChannelList extends Component {
  // componentWillMount() {
  //
  // }

  render() {
    const { channels } = this.props;

    return (
      <div className="channel-list-panel">
        <h3>Redux Chat</h3>
        <div className="channel-list">
          {
            channels.map((channel, index) => {
              let classes = this.props.selectedChannel === channel ? 'selected': '';
              return <p
                key={index}
                className={classes}>
                  {channel}
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
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
