import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Twitter/Auth/Login'
import Register from './Twitter/Auth/Register'
import { auth } from './firebase';
import Home from './Twitter/Home';
import Profile from './Twitter/Profile';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe;
  }, []);

  return (
    <div className=''>
      <div className='d-flex   justify-content-between'>
         
        <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/Profile' element={<Profile />}/>
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to='/login' /> : <Register />} />
        </Routes>
        
      </div>

    </div>
  );
}

export default App;