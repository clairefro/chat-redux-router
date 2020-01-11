// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history} from 'history';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});

// apply middlewares
const middlewares = applyMiddleware(logger, reduxPromise);

const initialState = {
  messages: [],
  channels: ['general', 'react', 'ruby', 'paris', 'montreal', 'help'],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`, // prompt("What is your username?") ,
  // currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Switch>
      <Route path=":channel" component={App} />
      <Redirect from="/" to="general" />
    </Switch>
  </Provider>,
  document.getElementById('root')
);
