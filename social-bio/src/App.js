import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pid from './pages/Pid';
import Follow from './pages/Follow';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pid" element={<Pid/>}></Route>
          <Route path="/followlist" element={<Follow/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
