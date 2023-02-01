import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gozosos from './pages/Gozosos/Gozosos';
import Dolorosos from './pages/Dolorosos';
import Gloriosos from './pages/Gloriosos';
import Luminosos from './pages/Luminosos';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/misterios/gozosos' element={<Gozosos />} />
      <Route path='/misterios/dolorosos' element={<Dolorosos />} />
      <Route path='/misterios/gloriosos' element={<Gloriosos />} />
      <Route path='/misterios/luminosos' element={<Luminosos />} />
    </Routes>
  );
}

export default App;
