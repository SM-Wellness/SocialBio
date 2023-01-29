import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pid from './pages/Pid';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="pid_page" element={<Pid/>}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
