import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: "/project/:id", element: <ProjectDetails /> }
        ]
    }
])


export default function App() {
    return <>
        <RouterProvider router={router} />
    </>
}
