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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/listing/:id" element={<Details />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      </BrowserRouter>
  </React.StrictMode>
);
