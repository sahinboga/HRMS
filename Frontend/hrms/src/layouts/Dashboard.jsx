import React from 'react'
import { Route, Switch } from 'react-router'
import AdminDashboard from './AdminDashboard'
import AuthDashboard from './AuthDashboard'
import EmployerDashboard from './EmployerDashboard'
import HomeDashboard from './HomeDashboard'
import JobSeekerDashboard from './JobSeekerDashboard'


export default function Dashboard() {
    return (
        <div>
            <Switch>
                <Route path="/admin-dashboard" component={AdminDashboard}/>
                <Route path="/employer" component={EmployerDashboard}/>
                <Route path="/jobseeker" component={JobSeekerDashboard}/>
                <Route path="/auth" component={AuthDashboard}/>
                <Route path="/" component={HomeDashboard}/>
            </Switch>
        </div>
    )
}
