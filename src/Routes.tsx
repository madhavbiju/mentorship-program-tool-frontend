import { Login } from '@mui/icons-material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import JoySignInSideTemplate from './pages/common/login/Login';
import App from './App';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoutes />}>
                <Route index element={<App/>} />
            </Route>
            <Route path='/login' element={<JoySignInSideTemplate />} />
        </Routes>
    );
}

const AppRouter = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default AppRouter;
