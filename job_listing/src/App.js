
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import{Login} from'./components/Login';
import{Job} from './components/Job';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Job/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Job"  element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;