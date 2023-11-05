import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import CategoryPage from './components/CategoryPage';
import TodoPage from './components/TodoPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'todos/',
                element: <TodoPage />,
            },
            {
                path: 'categories/',
                element: <CategoryPage />,
            },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
