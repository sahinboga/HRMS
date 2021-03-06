import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown } from 'semantic-ui-react'
import { Route } from 'react-router'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import JobAdvertDetail from '../pages/jobAdvertisement/JobAdvertDetail'
import JobAdvertismentList from '../pages/jobAdvertisement/JobAdvertismentList'
import FavoriteJobAdvertList from '../pages/jobAdvertisement/FavoriteJobAdvertList'
import ResumePage from '../pages/resume/ResumePage'
import JobSeekerJobApplication from '../pages/jobSeeker/JobSeekerJobApplication'
import AuthService from '../services/authService'
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions/authActions'
import { useHistory } from 'react-router-dom'

export default function JobSeekerDashboard() {

    const url = "/dashboard"

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dispatch=useDispatch()
    const history=useHistory()
    
    const logoutClick=()=>{
        dispatch(logout())
        history.push("/auth/login")
    }

    return (
        <>
            <DashboardNavbar>
                <div className='m-3'>
                    <img className="profile-btn" width="60" height="60" src="https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg" onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    <Dropdown direction="left" open={isProfileOpen} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <Dropdown.Menu>
                            <Dropdown.Item icon="user" text="Profilim" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={()=>logoutClick()}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to={url + "/home"} />
                <Button icon="briefcase" content="İş İlanları" className="sidebar_btn" as={NavLink} to={url + "/jobadvertisements"} />
                <Button icon="heart outline" content="Favorilerim" className="sidebar_btn" as={NavLink} to={url + "/favorite-jobadverts"} />
                <Button icon="file alternate outline" content="Özgeçmişim" className="sidebar_btn" as={NavLink} to={url + "/resume"} />
                <Button icon="file alternate outline" content="Başvurularım" className="sidebar_btn" as={NavLink} to={url + "/all-job-application"} />

            </DashboardSidebar>
            <main className="dashboard_main ">
                <div className="m-auto">

                    <Route exact path={url + "/jobadvertisements"} component={JobAdvertismentList} />
                    <Route exact path={url + "/favorite-jobadverts"} component={FavoriteJobAdvertList} />
                    <Route exact path={url + "/all-job-application"} component={JobSeekerJobApplication} />
                    <Route exact path={url + "/resume"} component={ResumePage} />
                </div>
                <div>
                    <Route path={url + "/jobadvertisements/detail/:id"} component={JobAdvertDetail} />
                </div>

            </main>
        </>
    )
}
