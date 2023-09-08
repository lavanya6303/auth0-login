import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import UserProfile from './components/userProfile';
import LogoutPage from './logoutPage';

function App() {
  return (
    <>    
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/logout' element={<LogoutPage />} />
    </Routes>
    </>
  );
}

export default App;
