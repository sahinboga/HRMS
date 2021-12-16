import React, { useEffect, useState } from 'react'
import WorkTypeService from '../../services/workTypeService'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function WorkTypeDropdown({...props}) {

    const [workTypes, setWorkTypes] = useState([])
    useEffect(() => {
       
        let wtService= new WorkTypeService()
        wtService.getWorkType().then(result=>setWorkTypes(result.data.data))
    }, [])
    return (
        <>
            <SBDropdown
                label="Çalışma Şekli"
                placeholder="Çalışma şekli seçiniz"
                {...props}
                options={workTypes?.map((wt,index)=>{
                    return {text:wt.name,key:index,value:wt.id}
                })}
            />
        </>
    )
}
