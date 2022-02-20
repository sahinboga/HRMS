import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import EmployerJobApplication from '../pages/employer/EmployerJobApplication'
import EmployerProfile from '../pages/employer/EmployerProfile'
import AddJobAdvert from '../pages/jobAdvertisement/AddJobAdvert'
import UpdateJobAdvert from '../pages/jobAdvertisement/UpdateJobAdvert'

export default function EmployerDashboard() {

    const url = "/employer"
    return (
        <div>
            <DashboardNavbar>

            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to={url + "/home"} />
                <Button icon="file alternate outline" content="Başvurular" className="sidebar_btn" as={NavLink} to={url + "/get-job-application"} />
                <Button icon="user circle" content="Profil" className="sidebar_btn" as={NavLink} to={url + "/profile"} />
                <Button icon="add circle" content="İlan Ekle" className="sidebar_btn" as={NavLink} to={url+"/add-jobadvert"} />
            </DashboardSidebar>
            <main>
                <Route exact path={url+"/profile"} component={EmployerProfile}/> 
                <Route exact path={url+"/add-jobadvert"} component={AddJobAdvert}/>
                <Route exact path={url+"/update-jobadvert/:id"} component={UpdateJobAdvert}/>
                <Route exact path={url+"/get-job-application"} component={EmployerJobApplication}/>
            </main>
        </div>
    )
}
