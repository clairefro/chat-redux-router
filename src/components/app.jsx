import React from 'react';

import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import WorkspaceList from '../components/workspace_list';

const App = (props) => {
  return (
    <div className="app">
      <WorkspaceList />
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
