import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProtectedRoute from './ProtectedRoute';
import '../css/output.css';
import { HomePage } from './pages/Home/Loadable';
import { Home } from './pages/Home/Imports';
import { RegisterPage } from './pages/Register/Loadable';
import { Register } from './pages/Register/Imports';
import { LoginPage } from './pages/Login/Loadable';
import { Login } from './pages/Login/Imports';
import { ChatPage } from './pages/Chat/Loadable';
import { Chat } from './pages/Chat/Imports';

function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate='MBDEV React App' defaultTitle='MBDEV React App'>
        <meta name='description' content='MBDEV React App' />
      </Helmet>

      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/register' element={<RegisterPage />}>
          <Route index element={<Register />}></Route>
        </Route>
        <Route path='/login' element={<LoginPage />}>
          <Route index element={<Login />}></Route>
        </Route>
        <Route
          path='/chat'
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }>
          <Route index element={<Chat />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
