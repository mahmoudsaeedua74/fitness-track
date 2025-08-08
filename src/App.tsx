import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AuthSystem from './pages/auth/Aut';
export default function App() {
  const route = createBrowserRouter([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/register',
      element: <AuthSystem />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
