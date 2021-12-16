import React from 'react'
import { useSelector } from 'react-redux'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function SchoolDropdown({...props}) {

    const schools = useSelector(state => state.schools)
    return (
        <>
            <SBDropdown
                label="Okul Adı"
                placeholder="Okul seçiniz"
                {...props}
                options={schools?.data?.map((school,index)=>{
                    return {text:school.schoolName,key:index,value:school.schoolId}
                })}
            />
        </>
    )
}
