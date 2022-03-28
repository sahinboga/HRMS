import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EducationInfo from '../../components/resume/EducationInfo'
import ExperienceInfo from '../../components/resume/ExperienceInfo'
import LanguageInfo from '../../components/resume/LanguageInfo'
import PersonelInfo from '../../components/resume/PersonelInfo'
import SkillInfo from '../../components/resume/SkillInfo'
import AuthService from '../../services/authService'

export default function ResumePage() {
    
    return (
        <div className="resume">
            <div className="w-75 m-auto">
                <PersonelInfo />
                <ExperienceInfo />
                <EducationInfo />
                <LanguageInfo />
                <SkillInfo />
            </div>
        </div>
    )
}
