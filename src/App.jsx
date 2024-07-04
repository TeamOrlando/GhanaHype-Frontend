import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/rootLayout';
import LandingPage from './pages/Landing'
import Events from './pages/Events';
import CreateEvents from './pages/CreateEvents';
import ManageEvents from './pages/ManageEvents';


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
          path: "events",
          element: <Events/>
        },
        {
          path: "create-events",
          element: <CreateEvents/>
        }, 
        {
          path: "manage-events",
          element: <ManageEvents/>
        }
     
   
      ]
    }
  ])

  return <RouterProvider router={router}/>;
}

export default App
