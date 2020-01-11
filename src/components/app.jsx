import React from 'react';

import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="workspace-panel">
      </div>
      <div className="channels">
      </div>
      <MessageList />
    </div>
  );
};

export default App;
