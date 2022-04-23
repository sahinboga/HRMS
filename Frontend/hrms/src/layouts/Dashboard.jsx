import React from 'react'
import { Route, Switch } from 'react-router'
import ProtectedRoute from '../hoc/ProtectedRoute'
import Constant from '../utils/constants'
//import _404NotFound from '../pages/erros/_404NotFound'
//import _500InternalServer from '../pages/erros/_500InternalServer'
import AdminDashboard from './AdminDashboard'
import AuthDashboard from './AuthDashboard'
import EmployerDashboard from './EmployerDashboard'
import HomeDashboard from './HomeDashboard'
import JobSeekerDashboard from './JobSeekerDashboard'


export default function Dashboard() {
    return (
        <div>
            <Switch>
                <ProtectedRoute roles={[Constant.Roles.Admin]} path={Constant.RoleBasedRoute.Admin} component={AdminDashboard}/>
                <ProtectedRoute roles={[Constant.Roles.Employer]} path={Constant.RoleBasedRoute.Employer} component={EmployerDashboard}/>
                <ProtectedRoute roles={[Constant.Roles.JobSeeker]} path={Constant.RoleBasedRoute.JobSeeker} component={JobSeekerDashboard}/>
                <Route path="/auth" component={AuthDashboard}/>
                <Route path="/" component={HomeDashboard}/>
            </Switch>
        </div>
    )
}
