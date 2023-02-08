import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import AuthProvider from './context/authProvider';

import Home from './pages/Home';
import Landing from './pages/Landing';

import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path='/' element={<Landing />} />
                    <Route element={<ProtectedRoute redirectTo='/' />}>
                        <Route path='/home' element={<Home />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
