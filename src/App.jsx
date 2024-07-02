import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/rootLayout';
import LandingPage from './pages/Landing'
import About from './pages/Landing/components/about';
import EventsCalendar from './pages/Landing/components/eventsCalendar';
import UpcomingEvents from './pages/Landing/components/upcomingEvents';
import ContactUs from "./pages/ContactUs"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children:[
        {
          index: true,
          element: <LandingPage/>
        },
        {
          path: "about-us",
          element: <About/>
        },
        {
          path: "event-calendar",
          element: <EventsCalendar/>
        },
        {
          path: "upcoming-events",
          element: <UpcomingEvents/>
        },
        {
          path: "contact-us",
          element: <ContactUs/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>;
}

export default App
