import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import router from 'src/app/router.tsx'
import {client} from 'src/api'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ReactQueryDevtools />
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)