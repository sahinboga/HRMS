import React, { useState } from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown } from 'semantic-ui-react'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import CityList from '../pages/city/CityList'
import JobAdvertismentList from '../pages/jobAdvertisement/JobAdvertismentList'
import JobPositionList from '../pages/jobPosition/JobPositionList'
import languageList from '../pages/language/LanguageList'
import SchoolList from '../pages/school/SchoolList'
import CompanySectorList from '../pages/sector/CompanySectorList'
import SkillList from '../pages/skill/SkillList'
import Constant from '../utils/constants'

export default function AdminDashboard() {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const url = Constant.RoleBasedRoute.Admin
    return (
        <div>
            <DashboardNavbar>
                <div className='m-3'>
                    <img className="profile-btn" width="60" height="60" src="https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg" onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    <Dropdown direction="left" open={isProfileOpen} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <Dropdown.Menu>
                            <Dropdown.Item icon="setting" text="Ayarlar"/>
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to={url + "/home"} />
                <Button icon="briefcase" content="İş İlanları" className="sidebar_btn" as={NavLink} to={url + "/jobadvertisements"} />
                <Button icon="search plus" content="İş Pozisyonu" className="sidebar_btn" as={NavLink} to={url + "/job-position-list"} />
                <Button icon="settings" content="Sektörler" className="sidebar_btn" as={NavLink} to={url + "/company-sector-list"} />
                <Button icon="star" content="Yetenek" className="sidebar_btn" as={NavLink} to={url + "/skill-list"} />
                <Button icon="university" content="Okul" className="sidebar_btn" as={NavLink} to={url + "/school-list"} />
                <Button icon="language" content="Diller" className="sidebar_btn" as={NavLink} to={url + "/language-list"} />
                <Button icon="building" content="Şehirler" className="sidebar_btn" as={NavLink} to={url + "/city-list"} />
            </DashboardSidebar>
            <main className="dashboard_main ">
                <div>
                    <Route path={url + "/jobadvertisements"} component={JobAdvertismentList} />
                </div>
                <div className="w-75 m-auto">

                    <Route path={url + "/job-position-list"} component={JobPositionList} />
                    <Route path={url + "/company-sector-list"} component={CompanySectorList} />
                    <Route path={url + "/skill-list"} component={SkillList} />
                    <Route path={url + "/school-list"} component={SchoolList} />
                    <Route path={url + "/language-list"} component={languageList} />
                    <Route path={url + "/city-list"} component={CityList} />
                </div>

            </main>
        </div>
    )
}
