import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Pages/Layout'
import { HomePage } from '../Pages/HomePage'
import { GameDetailPage } from '../Pages/GameDetailPage'
import { PageNotFound } from '../Pages/404Eorror'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement:<PageNotFound/>,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'games/:slug', element: <GameDetailPage/>}
        ]

    }
])