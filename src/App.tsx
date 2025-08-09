import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Registration from './pages/Registration';
import DashboardLayout from './layout/DashboardLayout.js';
import DashboardPage from './pages/DashboardPage.js';
import MembersPage from './pages/MembersPage.js';
import { Toaster } from 'react-hot-toast';

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
    {
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: 'member',
          element: <MembersPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={route} />
    </>
  );
}
