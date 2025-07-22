import {  createHashRouter, RouterProvider } from "react-router-dom"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Portfolio from "./Components/Portfolio/Portfolio"
import Home from "./Components/Home/Home"
import Layout from "./Components/Layout/Layout"
import NotFound from "./Components/NotFound/NotFound"

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
