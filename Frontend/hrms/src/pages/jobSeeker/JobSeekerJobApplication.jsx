import React from 'react'
import { useSelector } from 'react-redux'
import Helper from '../../utils/helper'

export default function JobSeekerJobApplication() {

    const { data: jobSeeker } = useSelector(state => state.jobSeekerJobApplications)

    return (
        <div>
            <div className='right-section'>
                <div className="my-apply-container">
                    <div className="container">
                        <div className="rows">
                            <div className="main-container">
                                <div className="my-apply-section w-100">
                                    <div className="container-fluid">
                                        <div className="row mb-3">
                                            <div className="col px-0">
                                                <h2 className="my-apply-title">
                                                    Başvurular
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="job-application-list row">
                                            {
                                                jobSeeker?.map(js => (
                                                    <div className="jal-box ">
                                                        <div className="jal-top row">
                                                            <div className="jal-left col col-auto">
                                                                <a href="#" target="_blank" className="jal-logo float-md-right float-md-right">
                                                                    <figure><img src={js?.jobAdvertisement?.employer?.image?.imagePath} />
                                                                    </figure></a>
                                                            </div>
                                                            <a href={`/jobadvertisements/detail/`+js.jobAdvertisement.id} target="_blank" className="jal-center col pl-md-3">
                                                                <div className="jal-title">{js?.jobAdvertisement?.jobPosition?.jobName}</div>
                                                                <div className="jal-firm-name">{js?.jobAdvertisement?.employer?.companyName}</div>
                                                                <div className="jal-date">Başvuru Tarihi : <span>{Helper.DateEditing(js.applicationDate)}</span></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
