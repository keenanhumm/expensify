import React from 'react';
import { Link } from 'react-router-dom';
export const NotFoundPage = () => (
    <div>
        <h1>404! Page Not Found</h1>
        <h2><Link to="/">Go Home</Link></h2>
    </div>
);

export default NotFoundPage;