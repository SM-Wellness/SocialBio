import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pid from './pages/Pid';
import Follow from './pages/Follow';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="pid_page" element={<Pid/>}></Route>
          <Route path= "followlist" element={<Follow/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
