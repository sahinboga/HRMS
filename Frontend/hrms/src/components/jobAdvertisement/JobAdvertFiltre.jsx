import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Button, Checkbox, Dropdown, Label } from 'semantic-ui-react'
import StorageService from '../../services/storageService'
import WorkTypeService from '../../services/workTypeService'
import Constant from '../../utils/constants'
import SBCheckboxGroup from '../../utils/customs/SBCheckboxGroup'

export default function JobAdvertFiltre({ }) {
    const cities = useSelector(state => state.cities)
    const jobPositions = useSelector(state => state.jobPositions)
    const companySectors = useSelector(state => state.companySectors)

    const location = useLocation()
    const [workTypes, setWorkTypes] = useState([])
    
    useEffect(() => {
        let workTypeService = new WorkTypeService()
        workTypeService.getWorkType().then(result => setWorkTypes(result.data.data))
    }, [])

    const [cityId, setCityId] = useState([])
    const handleChangeCity = (e, { value }) => setCityId(value)

    const [jobPositionId, setJobPositionId] = useState([])

    const [sectorId, setSectorId] = useState([])

    const [workTypeId, setWorkTypeId] = useState([])

    const [status, setStatus] = useState([])

    const history = useHistory()
    async function setMyCallBack(mainFunc) {
        await mainFunc()
    }
    const handleFilterClick = () => {
        let query=`/jobseeker/jobadvertisements?c=${cityId.toString()}&jp=${jobPositionId.toString()}&cs=${sectorId.toString()}&wt=${workTypeId.toString()}`
                if(StorageService.isAdmin()){
                   query+= `&s=${status.toString()}`
                }
                query=query.replace(" ", "")
                console.log(query)
        setMyCallBack(() => history.push(query))
            .then(result => {
                console.log(location)

            })
        console.log(status)

    }
    const statusData = [{ name: "Aktif ilanlar", id: 1 }, { name: "Pasif ilanlar", id: 0 }]
    return (
        <div>
            <div className="bg-light  mt-4 rounded ">
                <Filtre header="Şehir">

                    <Dropdown clearable
                        options={cities.data.map((x) => {
                            return { key: x.cityId, text: x.cityName, value: x.cityId }
                        })}
                        search
                        onChange={handleChangeCity}
                        placeholder='Şehir seçiniz'
                        multiple
                        selection />
                </Filtre>
                <Filtre header="İş pozisyonu">
                    <SBCheckboxGroup trigger={setJobPositionId} data={jobPositions.data.map((jp) => { return { label: jp.jobName, value: jp.id } })} />
                </Filtre>
                <Filtre header="Sektör">
                    <SBCheckboxGroup trigger={setSectorId} data={companySectors.data.map((cs) => { return { label: cs.name, value: cs.id } })} />
                </Filtre>
                <Filtre header="Çalışma Tipi">
                    <SBCheckboxGroup trigger={setWorkTypeId} data={workTypes.map((wt) => { return { label: wt.name, value: wt.id } })} />
                </Filtre>
                {StorageService.isAdmin() && (<Filtre header="İlan durumu">
                    <SBCheckboxGroup trigger={setStatus} data={statusData.map((s) => { return { label: s.name, value: s.id } })} />
                </Filtre>)}
                <div className="p-3 text-center ">
                    <Button color="purple" onClick={() => handleFilterClick()}>
                        UYGULA
                    </Button>
                </div>
            </div>
        </div>
    )
}

const Filtre = ({ header, children }) => {
    return (
        <div className="bordered p-4">
            <Label className="my-3" color="violet">{header}</Label>
            {children}
        </div>
    )
}
