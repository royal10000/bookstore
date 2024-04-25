import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Page/Home'
import About from './Page/About'
import Error from './Page/Error'
import Service from './Page/Service'
import ContactForm from './Component/ContactForm'
import Books from './Page/Books'
export const Router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/service",
            element: <Service />
        },
        {
            path: "/contact",
            element: <ContactForm />
        },
        {
            path: "/books",
            element: <Books />
        },
        {
            path: "*",
            element: <Error />
        }
    ]

}])