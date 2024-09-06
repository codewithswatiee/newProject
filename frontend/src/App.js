import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import EditEvent from './pages/EditEvent';
import EventDetails from './pages/EventDetails';
import Events from './pages/Events';
import HomePage from './pages/HomePage';
import NewEvent from './pages/NewEvent';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {path: '/events', element: <Events />},
        {path: '/events/:id', element: <EventDetails />},
        {path: '/events/new', element: <NewEvent />},
        {path: '/events/:id/edit', element: <EditEvent />},
      ]
    }
  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
