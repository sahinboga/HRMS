import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import Constant from '../utils/constants'
import ProtectedRoute from '../utils/customs/ProtectedRoute'
import _404NotFound from '../pages/erros/_404NotFound'
//import _500InternalServer from '../pages/erros/_500InternalServer'
import AdminDashboard from './AdminDashboard'
import AuthDashboard from './AuthDashboard'
import EmployerDashboard from './EmployerDashboard'
import HomeDashboard from './HomeDashboard'
import JobSeekerDashboard from './JobSeekerDashboard'
import { CookieTypes } from '../utils/cookieTypes'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'


export default function Dashboard() {
    const auth = useSelector(state => state.auth)
    const [roleId, setRoleId] = useState(-1)
    useEffect(() => {
        if(auth.data && roleId === -1) {
            setRoleId(auth.data?.role?.id || -1)
        }
    }, [])

    const RoleBased = () => {
        return (
            <>
                {roleId === Constant.Roles.Admin && <ProtectedRoute path="/dashboard" component={AdminDashboard}/>}
                {roleId === Constant.Roles.Employer && <ProtectedRoute path="/dashboard" component={EmployerDashboard}/>}
                {roleId === Constant.Roles.JobSeeker && <ProtectedRoute path="/dashboard" component={JobSeekerDashboard}/>}
            </>
        )
    }

    return (
        <>
            <Switch>
                <Route path={"/dashboard"} component={RoleBased}/>
                {auth.data && (
                    <Route path={"/"}>
                        <Redirect to={"/dashboard"} />
                    </Route>
                )}
                <Route path="/auth" component={AuthDashboard}/>
                <Route path="/" component={HomeDashboard}/>
            </Switch>
        </>
    )
}
