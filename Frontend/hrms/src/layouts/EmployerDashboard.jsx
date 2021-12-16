import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import EmployerProfile from '../pages/employer/EmployerProfile'
import AddJobAdvert from '../pages/jobAdvertisement/AddJobAdvert'

export default function EmployerDashboard() {

    const url = "/employer"
    return (
        <div>
            <DashboardNavbar>

            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to={url + "/home"} />
                <Button icon="user circle" content="Profil" className="sidebar_btn" as={NavLink} to={url + "/profile"} />
                <Button icon="add circle" content="İlan Ekle" className="sidebar_btn" as={NavLink} to={url+"/add-jobadvert"} />
            </DashboardSidebar>
            <main>
                <Route exact path={url+"/profile"} component={EmployerProfile}/> 
                <Route exact path={url+"/add-jobadvert"} component={AddJobAdvert}/>
            </main>
        </div>
    )
}
