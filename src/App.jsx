import React from "react";
import ChatSession from "./Views/ChatSession";
import "./index.css";
import "./App.css";
import Messages from "./Components/Messages/Messages";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div className="app-container"> {/* This keeps the global styles */}
      {children}
    </div>
  );
};
const App = () => {
  return (
    
    <Router>
      <AppLayout>
        <Routes>
             <Route  path="/" element={<ChatSession />} />
              <Route path="messages" element={<Messages />} />
         </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
