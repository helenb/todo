import React from 'react';

import { Outlet, Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <header>
                <h1>React todo app</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`categories/`}>Categories</Link>
                        </li>
                        <li>
                            <Link to={`todos/`}>To dos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default App;
