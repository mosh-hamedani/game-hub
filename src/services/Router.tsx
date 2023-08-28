import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Pages/Layout'
import { HomePage } from '../Pages/HomePage'
import { GameDetailPage } from '../Pages/GameDetailPage'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'GameDetails', element: <GameDetailPage/>}
        ]

    }
])