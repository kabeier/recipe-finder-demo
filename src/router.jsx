import { createBrowserRouter } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import MealPage from './pages/MealPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    // App is the layout: the NavBar is on every page.
    element: <App />,
    // The children are the pages. The matching one shows where App puts <Outlet />.
    children: [
      { index: true, element: <HomePage /> }, // index: true = exactly "/"
      { path: 'meal/:id', element: <MealPage /> }, // :id is a URL parameter, e.g. /meal/52772
      { path: '*', element: <NotFoundPage /> }, // * = any other address
    ],
  },
])

export default router
