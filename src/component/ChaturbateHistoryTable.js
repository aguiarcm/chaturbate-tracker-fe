import React, { useEffect, useState } from 'react';
import './ChaturbateHistoryTable.css';

const ChaturbateHistoryTable = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetchChaturbateHistory();
  }, []);

  const fetchChaturbateHistory = async () => {
    try {
      const response = await fetch('http://localhost:8080/chaturbate-history/on-demand');
      const data = await response.json();
      setHistoryData(data);
    } catch (error) {
      console.error('Error fetching Chaturbate history:', error);
    }
  };

  return (
    <div className="table-container">
      <h2>Chaturbate Account History</h2>
      <table>
        <thead>
          <tr>
            <th>UID</th>
            <th>Username</th>
            <th>Token Balance</th>
            <th>Tips in Last Hour</th>
            <th>Last Broadcast</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((history) => (
            <tr key={history.uid}>
              <td>{history.uid}</td>
              <td>{history.username}</td>
              <td>{history.token_balance}</td>
              <td>{history.tips_in_last_hour}</td>
              <td>{history.last_broadcast}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChaturbateHistoryTable;
