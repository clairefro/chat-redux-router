import React from 'react';

import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="workspace-panel">
      </div>
      <div className="channels">
      </div>
      <div className="chat-panel">
        <h2>CHANNEL HEADER</h2>
        <hr/>
        <MessageList />
        <input type="text"/>
      </div>
    </div>
  );
};

export default App;
