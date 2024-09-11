import { useEffect, useState } from "react";
import "./styles.css";
import DateRangePicker from "../../Components/DateRangeInput/DateRangePicker";
import ChatList from "../../Components/ChatList/ChatList";
import { getChatSessions } from "../../helpers/api";
import CustomLoader from "../../Components/CustomLoader/CustomLoader";

const ChatSession = () => {
  const [chatSessions, setChatSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatSessions = async () => {
      try {
        setLoading(true);
        setChatSessions([]);
        setError(null);
        const response = await getChatSessions({ startDate, endDate });
        setChatSessions(response.data);
      } catch (error) {
        console.error("Error fetching chat sessions:", error);
        setError("Failed to fetch chat sessions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if ((startDate && endDate) || (!startDate && !endDate)) {
      fetchChatSessions();
    }
  }, [startDate, endDate]);

  return (
    <>
      <div className="chat-session-container">
        <>
          <h1 className="text-4xl font-white font-extrabold">Chat Sessions</h1>
          <div className="chat-session-content">
            {loading ? (
              <CustomLoader />
            ) : (
              <>
                <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
                <div>
                  <ChatList chatSessions={chatSessions} />
                </div>
                {error && <p className="error">{error}</p>}
              </>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default ChatSession;
