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

export default function AdminDashboard() {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
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
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to="/admin-dashboard/home" />
                <Button icon="briefcase" content="İş İlanları" className="sidebar_btn" as={NavLink} to="/admin-dashboard/jobadvertisements" />
                <Button icon="search plus" content="İş Pozisyonu" className="sidebar_btn" as={NavLink} to="/admin-dashboard/job-position-list" />
                <Button icon="settings" content="Sektörler" className="sidebar_btn" as={NavLink} to="/admin-dashboard/company-sector-list" />
                <Button icon="star" content="Yetenek" className="sidebar_btn" as={NavLink} to="/admin-dashboard/skill-list" />
                <Button icon="university" content="Okul" className="sidebar_btn" as={NavLink} to="/admin-dashboard/school-list" />
                <Button icon="language" content="Diller" className="sidebar_btn" as={NavLink} to="/admin-dashboard/language-list" />
                <Button icon="building" content="Şehirler" className="sidebar_btn" as={NavLink} to="/admin-dashboard/city-list" />
            </DashboardSidebar>
            <main className="dashboard_main ">
                <div>
                    <Route path="/admin-dashboard/jobadvertisements" component={JobAdvertismentList} />
                </div>
                <div className="w-75 m-auto">

                    <Route path="/admin-dashboard/job-position-list" component={JobPositionList} />
                    <Route path="/admin-dashboard/company-sector-list" component={CompanySectorList} />
                    <Route path="/admin-dashboard/skill-list" component={SkillList} />
                    <Route path="/admin-dashboard/school-list" component={SchoolList} />
                    <Route path="/admin-dashboard/language-list" component={languageList} />
                    <Route path="/admin-dashboard/city-list" component={CityList} />
                </div>

            </main>
        </div>
    )
}
