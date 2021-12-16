import React from 'react'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function LevelDropdown({...props}) {
    const options = [
        { key: 1, text: 'Başlangıç', value: 1 },
        { key: 2, text: 'Temel', value: 2 },
        { key: 3, text: 'Orta', value: 3 },
        { key: 4, text: 'İyi', value: 4 },
        { key: 5, text: 'İleri', value: 5 }
    ]
    return (
        <>
            <SBDropdown
                label="Seviye"
                placeholder="Seviye"
                {...props}
                options={options}
            />
        </>
    )
}
