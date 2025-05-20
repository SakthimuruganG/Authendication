import { createBrowserRouter } from 'react-router-dom';
import Start from './Components/Start'
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Logout from './Components/Logout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/About',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path : '/logout',
        element : <Logout />
    }
])

export default router;