import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Index from './frontend/home';

const routes = [
  {
    path: '/',
    element: <Index />
  }
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
