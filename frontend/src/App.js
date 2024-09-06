// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage               DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage         DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components      DONE
// 4. Add properly working links to the MainNavigation              DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active       DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components


import { createBrowserRouter, Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainNavigation from './components/MainNavigation'
function HomePage(){
  return(
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

function EventsPage(){
  return <h1>EventsPagee</h1>;
}

function EventDetailPage(){
  return <h1>EventDetailPage</h1>;
}

function NewEventPage(){
  return <h1>NewEventPage</h1>;
}

function EditEventPage(){
  return <h1>EditEventPage</h1>;
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {path: '/events', element: <EventsPage />},
        {path: '/events/:id', element: <EventDetailPage />},
        {path: '/events/new', element: <NewEventPage />},
        {path: '/events/:id/edit', element: <EditEventPage />},
      ]
    }
  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
