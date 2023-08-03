import { createBrowserRouter, redirect } from 'react-router-dom';
import LoginScreen from '../presentation/login/LoginScreen';

const router = createBrowserRouter([
  { path: 'login', element: <LoginScreen /> },
  {
    path: '/',
    loader: async () => {
      return redirect('/login');
    },
  },
]);

export { router };
