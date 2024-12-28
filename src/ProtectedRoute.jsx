import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLogin } from './LoginProvider'

function ProtectedRoute({children}) {
    const { isLoggedin } = useLogin();

    if (!isLoggedin) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute
