import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  // componentDidMount() {
  //   this.messageBox.focus();
  // }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    this.props.createMessage(this.props.channelFromParams, this.props.currentUser, this.state.value);
    this.setState({ value: '' }); // Clear message form
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="message-form">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
