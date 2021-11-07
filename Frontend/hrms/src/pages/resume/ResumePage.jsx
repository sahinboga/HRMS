import React from 'react'
import EducationInfo from '../../components/resume/EducationInfo'
import ExperienceInfo from '../../components/resume/ExperienceInfo'
import LanguageInfo from '../../components/resume/LanguageInfo'
import PersonelInfo from '../../components/resume/PersonelInfo'
import SkillInfo from '../../components/resume/SkillInfo'

export default function ResumePage() {
    return (
        <div className="resume">
            <div className="w-75 m-auto">
                <PersonelInfo />
                <ExperienceInfo/>
                <EducationInfo/>
                <LanguageInfo/>
                <SkillInfo/>
            </div>
        </div>
    )
}
