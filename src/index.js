import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Layout from './Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Listing from './pages/Listing';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/listing/:id" element={<Details />} />
            <Route path="/listing/movies" element={<Listing key={"movies"} category='movies'/>} />
            <Route path="/listing/TVs" element={<Listing key={"TVs"} category='TVs'/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
             } />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      </BrowserRouter>
  </React.StrictMode>
);
