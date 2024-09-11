import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export const ICON_SRC =
  "https://cdn-icons-png.freepik.com/512/12775/12775853.png";
  
const ChatList = ({ chatSessions }) => {
  const navigate = useNavigate(); 
  return (
    <div className="chat-sessions-container">
      {chatSessions.length === 0 ? (
        <p className="font-bold font-italic font-white text-base">No chat sessions found for the selected date range.</p>
      ) : (
        chatSessions.map((session) => (
          <div onClick={() => navigate('messages', { state: { messages: session.chat_messages } })} key={session.id} 
                className="chat-session-item">
            <div className="chat-session-item-header">
              <img width={120} src={ICON_SRC} alt="icon" />
            </div>

            <div className="chat-session-item-content">
              
              <div className="chat-session-detail">
                <span className="label font-white font-extrabold">Created At:</span>
                <span className="font-white font-italic font-bold">{new Date(session.created_at).toLocaleString()}</span>
              </div>

              <div className="chat-session-detail">
                <span className="label font-white font-extrabold">Updated At:</span>
                <span className="font-white font-italic font-bold">{new Date(session.updated_at).toLocaleString()}</span>
              </div>

              <div className="chat-session-detail">
                <span className="label font-white font-extrabold">User ID:</span>
                <span className="font-white font-italic font-bold">{session.user_id}</span>
              </div>

              <div className="chat-session-detail">
                <span className="label font-white font-extrabold">Messages:</span>
                <span className="font-white font-italic font-bold">{session.chat_messages.length}</span>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatList;
