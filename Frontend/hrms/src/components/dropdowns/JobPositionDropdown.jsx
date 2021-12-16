import React from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function JobPositionDropdown({...props}) {

    const jobPositions = useSelector(state => state.jobPositions)
    return (
        <>
            <SBDropdown
                label="İş Pozisyonu"
                placeholder="İş pozisyonu seçiniz"
                {...props}
                options={jobPositions?.data?.map((jp,index)=>{
                    return {text:jp.jobName,key:index,value:jp.id}
                })}
            />

            
        </>
    )
}
