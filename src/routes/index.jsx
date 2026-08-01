import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout.jsx'
import Home from '../page/Home.jsx'
import About from '../page/About.jsx'
import Contact from '../page/Contact.jsx'
import Project from '../page/Project.jsx'

export const routes = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'project',
                element: <Project />,
            },
        ],
    },
])
