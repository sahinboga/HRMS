import React, { useEffect, useState } from 'react'
import DepartmentService from '../../services/departmentService'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function DepartmentDropdown({...props}) {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        let departmentService=new DepartmentService()
        departmentService.getDepartment().then(result=>setDepartments(result.data.data))
    },[])
    return (
        <>
            <SBDropdown
                label="Fakülte"
                placeholder="Fakülte Seçiniz"
                {...props}
                options={departments?.map((dep,index)=>{
                    return {text:dep.departmentName,key:index,value:dep.departmentId}
                })}
            />
        </>
    )
}
