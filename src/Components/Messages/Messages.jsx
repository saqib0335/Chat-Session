import { useLocation } from "react-router-dom";
import "./Messages.css";  // Add specific styling for Messages component

const Messages = () => {
  const location = useLocation();
  const { messages } = location.state || {};

  return (
    <div className="messages-container">
      <h1>Messages</h1>
      <div className="messages-list">
        {messages && messages.length > 0 ? (
          messages.map((item, index) => (
            <div key={index} className="message-item">
              {item.message_content}
            </div>
          ))
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
