import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { Home } from './pages';
import { Features, Login } from './components';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>}>
        
        {/* <Route path="Login" element={<Login />} /> */}
        {/* <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} /> */}
        
      </Route>,
    ),
  );

  return (
   <RouterProvider router={router} />
  );
}

export default App;
