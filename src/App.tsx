
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Footer } from './components/Footer';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { User } from './pages/User';

function App() {
  return <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>      
      <Route path='/dashboard/user' element={<User/>}/>
    </Routes>
    

  
}

export default App;
