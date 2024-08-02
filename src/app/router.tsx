import {createBrowserRouter, Link, Navigate} from 'react-router-dom'
import App from './app.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <div className="text-2xl">
                    <Link to="/route">
                        <h3 className="text-gray-700">Go to Route</h3>
                    </Link>
                </div>,
            },
            {
                path: 'route',
                element: <div>
                    route!
                    <Link to="/">
                        <h3 className="text-gray-700">Home</h3>
                    </Link>
                </div>,
            },
            {
                path: '*',
                element: <Navigate to="/"/>,
            },
        ],
    },
])

export default router