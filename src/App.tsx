import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Registration from './pages/Registration';
export default function App() {
  const route = createBrowserRouter([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/register',
      element: <Registration />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
