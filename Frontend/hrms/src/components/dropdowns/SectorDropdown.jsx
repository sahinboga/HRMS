import { Form } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function SectorDropdown({...props}) {

    const companySectors = useSelector(state => state.companySectors)
    return (
        <>
            <SBDropdown
                label="Şirket Sektörü"
                placeholder="Sektör seçiniz"
                {...props}
                options={companySectors?.data?.map((cs,index)=>{
                    return {text:cs.name,key:index,value:cs.id}
                })}
            />
        </>
    )
}
