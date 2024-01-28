// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import JoySignInSideTemplate from './pages/common/login/Login';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import App from './App';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoutes />} />
            <Route path='/login' element={<JoySignInSideTemplate />} />
            <Route path='/admin/dashboard' element={<App/>} />
            <Route path='/mentor/dashboard' element={<AdminDashboard />} />
            <Route path='/mentee/dashboard' element={<AdminDashboard />} />
        </Routes>
    );
};

const AppRouter = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default AppRouter;
