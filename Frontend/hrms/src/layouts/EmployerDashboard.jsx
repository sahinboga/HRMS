import React, { useState } from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown } from 'semantic-ui-react'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import useAuth from '../hooks/useAuth'
import EmployerJobApplication from '../pages/employer/EmployerJobApplication'
import EmployerProfile from '../pages/employer/EmployerProfile'
import AddJobAdvert from '../pages/jobAdvertisement/AddJobAdvert'
import UpdateJobAdvert from '../pages/jobAdvertisement/UpdateJobAdvert'
import Constant from '../utils/constants'

export default function EmployerDashboard() {

    const url = Constant.RoleBasedRoute.Employer

    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const {handleLogout} = useAuth()
    return (
        <div>
            <DashboardNavbar>
                <div className='m-3'>
                    <img className="profile-btn" width="60" height="60" src="https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg" onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    <Dropdown direction="left" open={isProfileOpen} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <Dropdown.Menu>
                            <Dropdown.Item icon="user" text="Profilim" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={()=>handleLogout()}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to={url + "/home"} />
                <Button icon="file alternate outline" content="Başvurular" className="sidebar_btn" as={NavLink} to={url + "/get-job-application"} />
                <Button icon="user circle" content="Profil" className="sidebar_btn" as={NavLink} to={url + "/profile"} />
                <Button icon="add circle" content="İlan Ekle" className="sidebar_btn" as={NavLink} to={url + "/add-jobadvert"} />
            </DashboardSidebar>
            <main>
                <Route exact path={url + "/profile"} component={EmployerProfile} />
                <Route exact path={url + "/add-jobadvert"} component={AddJobAdvert} />
                <Route exact path={url + "/update-jobadvert/:id"} component={UpdateJobAdvert} />
                <Route exact path={url + "/get-job-application"} component={EmployerJobApplication} />
            </main>
        </div>
    )
}
