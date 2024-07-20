import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Plans from './components/Plans';
import Movies from './components/Movies';
import Login from './components/Login';
import Main from './components/Main';
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';
import Signup3 from './components/Signup3';
import Confirmation from './components/Confirmation';
import Watchlist from './components/Watchlist';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Signup1" element={<Signup1 />} />
          <Route path="/Signup2" element={<Signup2 />} />
          <Route path="/Signup3" element={<Signup3 />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
