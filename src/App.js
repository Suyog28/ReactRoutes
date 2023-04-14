
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from "./componants/Home";
import './App.css';
import Support from './componants/Support';
import About from './componants/About';
import Labs from './componants/Labs';
import NotFound from './componants/NotFound';
import MainHeader from './componants/MainHeader';


function App() {
  return (

    <div className="App">
      <nav>
        <ul>

          <li><NavLink to="/">Home</NavLink>
            <li> <NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/labs">Labs</NavLink></li>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
