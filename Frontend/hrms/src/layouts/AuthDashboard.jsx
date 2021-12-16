import React from 'react'
import { Route, Switch } from 'react-router'
import EmployerRegisterPage from '../pages/auth/EmployerRegisterPage'
import JobSeekerRegisterPage from '../pages/auth/JobSeekerRegisterPage'
import LoginPage from '../pages/auth/LoginPage'


export default function AuthDashboard() {
    return (
        <Switch>
            <Route path="/auth/login" component={LoginPage} exact/>
            <Route path="/auth/jobseeker-register" component={JobSeekerRegisterPage} exact/>
            <Route path="/auth/employer-register" component={EmployerRegisterPage} exact/>
        </Switch>
    )
}
