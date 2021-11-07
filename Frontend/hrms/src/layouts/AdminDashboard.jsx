import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import DashboardNavbar from '../components/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar'
import CityList from '../pages/city/CityList'
import JobPositionList from '../pages/jobPosition/JobPositionList'
import languageList from '../pages/language/LanguageList'
import SchoolList from '../pages/school/SchoolList'
import CompanySectorList from '../pages/sector/CompanySectorList'
import SkillList from '../pages/skill/SkillList'

export default function AdminDashboard() {
    return (
        <div>
            <DashboardNavbar>
                <Button>AAd</Button>
                
            </DashboardNavbar>
            <DashboardSidebar>
                <Button icon="home" content="Dashboard" className="sidebar_btn" as={NavLink} to="/admin-dashboard/home" />
                <Button icon="search plus" content="İş Pozisyonu" className="sidebar_btn" as={NavLink} to="/admin-dashboard/job-position-list" />
                <Button icon="settings" content="Sektörler" className="sidebar_btn" as={NavLink} to="/admin-dashboard/company-sector-list" />
                <Button icon="star" content="Yetenek" className="sidebar_btn" as={NavLink} to="/admin-dashboard/skill-list" />
                <Button icon="university" content="Okul" className="sidebar_btn" as={NavLink} to="/admin-dashboard/school-list" />
                <Button icon="language" content="Diller" className="sidebar_btn" as={NavLink} to="/admin-dashboard/language-list" />
                <Button icon="building" content="Şehirler" className="sidebar_btn" as={NavLink} to="/admin-dashboard/city-list" />
            </DashboardSidebar>
            <main className="dashboard_main ">
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
