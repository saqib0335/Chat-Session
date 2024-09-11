import axiosInstance from "./axiosInstance";

export const getChatSessions = ({ startDate, endDate }) => {
  let params = null;

  if (startDate && endDate) {
    // Remove milliseconds and 'Z' from the ISO string
    const startFormatted = startDate.toISOString().split('.')[0]; 
    const endFormatted = endDate.toISOString().split('.')[0];

    params = {
      start_date: startFormatted,
      end_date: endFormatted,
    };
  }

  return axiosInstance.get("challenge/chat_sessions/", { params });
};