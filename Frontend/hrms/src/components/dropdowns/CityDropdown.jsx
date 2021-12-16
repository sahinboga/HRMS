import React from 'react'
import { useSelector } from 'react-redux'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function CityDrpdown({ ...props }) {

    const cities = useSelector(state => state.cities)
    return (
        <>
            <SBDropdown
                label="Şehir"
                placeholder="Şehir seçiniz"
                {...props}
                options={cities?.data?.map((city, index) => {
                    return { text: city.cityName, key: index, value: city.cityId }
                })}
            />
        </>
    )
}
