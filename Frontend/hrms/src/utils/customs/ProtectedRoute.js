import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { CookieTypes } from '../cookieTypes'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router-dom'

function ProtectedRoute({...props}) {
    const location = useLocation();
    const isLogin = Cookies.get(CookieTypes.AUTH)
    return isLogin ? (
        <Route {...props}/>
    )
    : <Redirect to={{pathname:"/auth/login", state: {from: location}}}/>
}

export default ProtectedRoute