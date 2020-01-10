import React, { Component } from 'react';

const Message = (props) => {
  const { author, content, createdAt } = props.message;
  return (
    <div className="message">
      <div className="header">
        <h3>{author}</h3>
        <p>{createdAt}</p>
      </div>
      <p className="message-content">{content}</p>
    </div>
  );
};

export default Message;
