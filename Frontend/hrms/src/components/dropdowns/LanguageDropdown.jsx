import React, { useEffect, useState } from 'react'
import LanguageService from '../../services/languageService'
import SBDropdown from '../../utils/customs/dropdowns/SBDropdown'

export default function LanguageDropdown({...props}) {

    const [languages, setLanguages] = useState([])
    useEffect(() => {
        let languageService = new LanguageService()
        languageService.getLanguage().then(result => setLanguages(result.data.data))
    }, [])
    return (
        
        <>
            <SBDropdown
                label="Diller"
                placeholder="Dil seçiniz"
                {...props}
                options={languages?.map((language,index)=>{
                    return {text:language.languageName,key:index,value:language.languageId}
                })}
            />
        </>
    )
}
