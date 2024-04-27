import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Page/Home'
import About from './Page/About'
import Error from './Page/Error'
import Service from './Page/Service'
import ContactForm from './Component/ContactForm'
import Books from './Page/Books'
import AddBook from './Page/AddBook'
import SingleBook from './Page/SingleBook'
import EditBook from './Page/EditBook'
import SingleEdit from './Page/SingleEdit'
import DeleteBook from './Page/DeleteBook'
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
            element: <Books />,
        },
        {
            path: "/add-book",
            element: <AddBook />,
        },
        {
            path: "/edit-book",
            element: <EditBook />,
        },
        {
            path: "/edit-book/:id",
            element: <SingleEdit />,
        },
        {
            path: "/delete-book/:_id",
            element: <DeleteBook />,
        },
        {
            path: "/books/:_id",
            element: <SingleBook />,
        },
        {
            path: "*",
            element: <Error />
        }
    ]

}])