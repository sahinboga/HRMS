import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Dropdown, Label, Pagination } from 'semantic-ui-react'
import JobAdvertFiltre from '../../components/jobAdvertisement/JobAdvertFiltre'
import JobAdvertPost from '../../components/jobAdvertisement/JobAdvertPost'
import { useQuery } from '../../hooks/useQuery'
import StorageService from '../../services/storageService'
import { getActiveJobAdvertisements, getJobAdvertisementFilterAndPage } from '../../store/actions/jobAdvertisementAction'
import Helper from '../../utils/helper'

export default function JobAdvertismentList() {
    let query = useQuery()
    const location = useLocation()
    const jobAdvertisements = useSelector(state => state.jobAdvertisements)
    const [activePage, setActivePage] = useState(1)
    const [pageSize, setPageSize] = useState(1)


    useEffect(() => {

        handleFilter()
    }, [location.search, activePage, pageSize])

    useEffect(() => {
        setActivePage(1)
        handleFilter()
    }, [location.search])


    const dispatch = useDispatch()

    const handleFilter = () => {

        const filter = {
            cityId: Helper.StrToArray(query.get("c")),
            jobPositionId: Helper.StrToArray(query.get("jp")),
            workTypeId: Helper.StrToArray(query.get("wt")),
            companySectorId: Helper.StrToArray(query.get("cs")),
            status: Helper.StrToArray(query.get("s")),
        }

        if(!StorageService.isAdmin()){
            filter.status=[1]
        }
        dispatch(getJobAdvertisementFilterAndPage(activePage, pageSize, filter))

    }

    const handlePaginationChange = (e, { activePage }) => { setActivePage(activePage) }

    const defaultPageSize = [1, 2, 5, 10]

    const handlePageSizeOnChange = (e, { value }) => {
        setPageSize(value)
        setActivePage(1)
    }
    return (
        <div className="">
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-3">
                    <JobAdvertFiltre />
                </div>
                <div className="col-md-8 mt-4">
                    <div>
                        {jobAdvertisements?.data.map(jobAdvert => (
                            <JobAdvertPost jobAdvert={jobAdvert} />
                        ))
                        }
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <div className="my-2">
                                <Pagination
                                    firstItem={null}
                                    lastItem={null}
                                    siblingRange={1}
                                    totalPages={jobAdvertisements.totalJobAdvertCount / pageSize}
                                    activePage={activePage}
                                    onPageChange={handlePaginationChange}
                                />
                            </div>

                            <div>
                                <Dropdown
                                    options={defaultPageSize.map((x, index) => {
                                        return { key: index, text: x, value: x }
                                    })}
                                    onChange={handlePageSizeOnChange}
                                    defaultValue={1}
                                    selection />
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
