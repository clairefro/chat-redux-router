import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  return (
    <div className="message">
      <div className="message-header">
        <h3>{author}</h3>
        <p>${created_at}</p>
      </div>
      <p className="message-content">{content}</p>
    </div>
  );
};

export default Message;
