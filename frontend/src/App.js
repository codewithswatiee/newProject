import { createBrowserRouter } from 'react-router-dom';
import EventsRoot from './pages/EventsRoot';
import { RouterProvider } from 'react-router-dom';
import EditEvent from './pages/EditEvent';
import EventDetails from './pages/EventDetails';
import Events from './pages/Events';
import HomePage from './pages/HomePage';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/RootLayout';
import { loader as eventsLoader } from './pages/Events';
import Error from './pages/Error';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error /> ,
      children: [
        { index: true, element: <HomePage />},
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {index: true, element: <Events />, loader: eventsLoader},
            {path: ':id', element: <EventDetails />},
            {path: 'new', element: <NewEvent />},
            {path: ':id/edit', element: <EditEvent />},
          ]
        }
      ]
    }

  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
