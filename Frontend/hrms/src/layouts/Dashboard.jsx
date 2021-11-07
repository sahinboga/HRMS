import React from 'react'
import { Route, Switch } from 'react-router'
import AdminDashboard from './AdminDashboard'
import HomeDashboard from './HomeDashboard'
import JobSeekerDashboard from './JobSeekerDashboard'

export default function Dashboard() {
    return (
        <div>
            <Switch>
                <Route path="/admin-dashboard" component={AdminDashboard}/>
                <Route path="/jobseeker" component={JobSeekerDashboard}/>
                <Route path="/" component={HomeDashboard}/>
            </Switch>
        </div>
    )
}
