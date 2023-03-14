import './App.css';
import Home from '../src/components/Home';
import Support from '../src/components/Support';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Membership from '../src/components/Membership';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname}>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path='/membership' element={<Membership/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
