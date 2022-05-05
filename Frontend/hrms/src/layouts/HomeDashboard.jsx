import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import MainFooter from '../components/MainFooter'
import MainPage from '../components/MainPage'
import HomePage from '../pages/HomePage'

export default function HomeDashboard() {
    return (
        <div>
            <HomeNavbar/>
            <HomePage/>
            <MainPage/>
            <MainFooter/>
        </div>
    )
}
