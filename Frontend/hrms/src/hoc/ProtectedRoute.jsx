import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import CookieService from '../services/cookieService'
import { setLoginData } from '../store/actions/authActions'
import { CookieTypes } from '../utils/CookieTypes'

const ProtectedRoute = ({roles, ...rest}) => {
    let { user } = useSelector(state => state.auth)
    const isLogin = Cookies.get(CookieTypes.AUTH)
    if(!isLogin) {
        return <Redirect to={"/auth/login"} />
    }

    const isAccess = user && user.role && roles?.includes(user.role.id)
    if(!isAccess) {
        return <Redirect to={"/forbidden"} />
    }

    return <Route {...rest} />
}

export default ProtectedRoute