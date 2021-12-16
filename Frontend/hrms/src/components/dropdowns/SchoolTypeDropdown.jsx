import React from 'react'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function SchoolTypeDropdown({...props}) {

    const options = [
        { key: 1, text: 'Ön Lisans', value: 'Ön Lisans' },
        { key: 2, text: 'Lisans', value: 'Lisans' },
        { key: 3, text: 'Yüksek Lisans', value: 'Yüksek Lisans' },
        { key: 4, text: 'Doktora', value: 'Doktora' },
    ]
    return (
        <>
            <SBDropdown
                label="Eğitim Durumu"
                placeholder="Eğitim durumu seçiniz"
                {...props}
                options={options}
            />
        </>
    )
}
