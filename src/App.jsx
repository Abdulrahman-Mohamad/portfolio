import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Home from './pages/Home/Home'
import Testimonials from './sections/Testimonials'
import MyProject from './sections/MyProject'
import ExperienceSection from './sections/ExperienceSection'
import Contact from './sections/Contact'
import Blog from './pages/Blog/Blog'

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: "/project/:id", element: <ProjectDetails /> },
            { path: "/work", element: <MyProject /> },
            { path: "/experience", element: <ExperienceSection /> },
            { path: "/testimonials", element: <Testimonials /> },
            { path: "/contact", element: <Contact /> },
            { path: "/blog", element: <Blog /> },
        ]
    }
])


export default function App() {
    return <>
        <RouterProvider router={router} />
    </>
}
