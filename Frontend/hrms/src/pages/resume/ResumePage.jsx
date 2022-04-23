import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EducationInfo from '../../components/resume/EducationInfo'
import ExperienceInfo from '../../components/resume/ExperienceInfo'
import LanguageInfo from '../../components/resume/LanguageInfo'
import PersonelInfo from '../../components/resume/PersonelInfo'
import SkillInfo from '../../components/resume/SkillInfo'
import { getResume } from '../../store/actions/resumeActions'
import Constant from '../../utils/constants'

export default function ResumePage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getResume(Constant.JobSeekerId))
    }, [])
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
