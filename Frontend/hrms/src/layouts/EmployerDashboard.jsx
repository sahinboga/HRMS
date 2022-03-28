import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown } from 'semantic-ui-react'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import EmployerJobApplication from '../pages/employer/EmployerJobApplication'
import EmployerProfile from '../pages/employer/EmployerProfile'
import AddJobAdvert from '../pages/jobAdvertisement/AddJobAdvert'
import UpdateJobAdvert from '../pages/jobAdvertisement/UpdateJobAdvert'
import AuthService from '../services/authService'
import { logout } from '../store/actions/authActions'

export default function EmployerDashboard() {

    const url = "/dashboard"

    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const dispatch=useDispatch()
    const history=useHistory()
    
    const logoutClick=()=>{
        dispatch(logout())
        history.push("/auth/login")
    }

    return (
        <div>
            <DashboardNavbar>
                <div className='m-3'>
                    <img className="profile-btn" width="60" height="60" src="https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg" onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    <Dropdown direction="left" open={isProfileOpen} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <Dropdown.Menu>
                            <Dropdown.Item icon="setting" text="Ayarlar" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={()=>logoutClick()}/>
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
