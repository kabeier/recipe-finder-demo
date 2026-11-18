import { createBrowserRouter, createHashRouter } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import MealPage from './pages/MealPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// GitHub Pages only serves real files. Refreshing /recipe-finder/meal/52772 asks for a file
// that doesn't exist, so you get GitHub's 404.
// The hash router puts the page after a #: /recipe-finder/#/meal/52772 . The browser never sends
// the part after # to the server, so the server always returns index.html and React picks the page.
// import.meta.env.PROD is true in the built app: hash router there, normal addresses in dev.
const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter

const router = createRouter([
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
