import {createBrowserRouter, Navigate} from 'react-router-dom'
import App from './app.tsx'
import {HomePage} from 'src/features/home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'about',
                element: <div>
                    <h3 className="text-gray-700">about</h3>
                </div>,
            },
            {
                path: 'services',
                element: <div>
                    <h3 className="text-gray-700">services</h3>
                </div>,
            },
            {
                path: 'contact',
                element: <div>
                    <h3 className="text-gray-700">contact</h3>
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