import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import JobAdvertDetail from '../pages/jobAdvertisement/JobAdvertDetail'
import JobAdvertismentList from '../pages/jobAdvertisement/JobAdvertismentList'
import FavoriteJobAdvertList from '../pages/jobAdvertisement/FavoriteJobAdvertList'
import ResumePage from '../pages/resume/ResumePage'

export default function JobSeekerDashboard() {

    const url="/jobseeker"
    return (
        <div>
            <DashboardNavbar>

            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to={url+"/home"} />
                <Button icon="briefcase" content="İş İlanları" className="sidebar_btn" as={NavLink} to={url+"/jobadvertisements"} />
                <Button icon="heart outline" content="Favorilerim" className="sidebar_btn" as={NavLink} to={url+"/favorite-jobadverts"} />
                <Button icon="file alternate outline" content="Özgeçmişim" className="sidebar_btn" as={NavLink} to={url+"/resume"} />
            </DashboardSidebar>
            <main className="dashboard_main ">
                <div className="w-7s5 m-auto">

                    <Route exact path={url+"/jobadvertisements"} component={JobAdvertismentList}/>
                    <Route exact path={url+"/favorite-jobadverts"} component={FavoriteJobAdvertList}/>
                    <Route exact path={url+"/resume"} component={ResumePage}/>
                </div>
                <div>
                    <Route path={url+"/jobadvertisements/detail/:id"} component={JobAdvertDetail}/> 
                </div>

            </main>
        </div>
    )
}
