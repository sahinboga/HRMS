import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Button, Icon, Label, List, Table } from 'semantic-ui-react'
import AddFavorite from '../../components/jobAdvertisement/AddFavorite'
import JobAdvertisementService from '../../services/jobAdvertismentService'
import StorageService from '../../services/storageService'
import { passiveJobAdvert } from '../../store/actions/jobAdvertisementAction'
import Helper from '../../utils/helper'
import RoleAction from '../../utils/RoleActions'


export default function JobAdvertDetail() {
    const [jobAdverts, setJobAdverts] = useState([])
    const jobAdvertisements = useSelector(state => state.jobAdvertisements)
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getById(id).then(result => setJobAdverts(result.data.data))
    }, [])

    const HandleStatusClick=(id)=>{
       
        dispatch(passiveJobAdvert(!jobAdverts.isActive,id))
       // setJobAdverts({...jobAdverts})
    }
    

    const ActionButton = () => {
        return RoleAction({
            admin: (
                <div>
                    {
                        jobAdverts.isActive?
                        <Button negative onClick={()=>HandleStatusClick(jobAdverts.id)}>Pasif Yap</Button>
                        :
                        <Button positive onClick={()=>HandleStatusClick(jobAdverts.id)}>Onayla</Button>
                    }
                </div>
            ),
            jobseeker: (
                <div>
                    <button className="btn btn-apply">Başvur</button>
                    <span className="px-2"></span>
                    <AddFavorite jobAdverts={jobAdverts} />
                </div>
            ),
            employer: (
                <div>
                    <Button positive>Güncelle</Button>
                </div>
            )
        })

    }
    return (
        <div>
            <header className="job-detail-header p-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="d-flex align-items-center">
                            <div className="company-logo ">
                                <img className="" width="100" height="100" src={jobAdverts.employer?.image?.imagePath} alt="" loading="lazy" />
                            </div>
                            <div className="info-detail">
                                <div>
                                    <h1>{jobAdverts.jobPosition?.jobName}</h1>
                                </div>
                                <div className="meta-detail d-flex">
                                    <div>
                                        <Icon name="globe" />{jobAdverts.companySector?.name}
                                    </div>
                                    <div>
                                        <Icon name="marker" />{jobAdverts.city?.cityName}
                                    </div>
                                    <div>
                                        <Icon name="clock outline" />{Helper.DateEditing(jobAdverts.releaseDate)}
                                    </div>
                                    <div>
                                        <Icon name="money bill alternate outline" />{jobAdverts.minSalary}₺-{jobAdverts.maxSalary}₺/month
                                    </div>
                                </div>
                                <div className="">
                                    <Label color="teal">{jobAdverts.workType?.name}</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="action">
                            <div className="deadline">
                                Son Başvuru Tarihi:{Helper.DateEditing(jobAdverts.deadline)}
                            </div>
                            <div>
                                <ActionButton />
                            </div>


                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row job-content-detail">
                    <div className="col-md-8 job-content-list">
                        <div className="job-content-description">
                            {jobAdverts.jobDescription}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget job-detail mb-4">
                            <h2>İş Detayı</h2>
                            <div className="">
                                <ul className="none-list">
                                    <WidgetItem header="Yayınlama Tarihi" content={Helper.DateEditing(jobAdverts.releaseDate)} iconName="calendar outline" />
                                    <WidgetItem header="Şehir" content={jobAdverts.city?.cityName} iconName="marker" />
                                    <WidgetItem header="Maaş" content={jobAdverts.minSalary + "₺-" + jobAdverts.maxSalary + "₺/month"} iconName="money bill alternate outline" />
                                    <WidgetItem header="Son Başvuru Tarihi" content={Helper.DateEditing(jobAdverts.deadline)} iconName="hourglass half" />
                                </ul>
                            </div>
                        </div>
                        <div className="widget job-detail">
                            <div className="company-header  d-flex align-items-center">
                                <div className="company-logo">
                                    <img className="" width="70" height="70" src={jobAdverts.employer?.image?.imagePath} alt="" loading="lazy" />
                                </div>
                                <div className="ms-4">
                                    <h1>{jobAdverts.employer?.companyName}</h1>
                                </div>
                            </div>
                            <div>
                                <CompanyItem header="Şehir:" content={jobAdverts.city?.cityName} />
                                <CompanyItem header="Telefon:" content={jobAdverts.employer?.phone} />
                                <CompanyItem header="Email:" content={jobAdverts.employer?.user?.email} />
                                <div className="employer-website text-center my-2">
                                    <a href="" className="btn btn-website">{jobAdverts.employer?.website}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const WidgetItem = ({ header, content, iconName }) => {
    return (
        <li >
            <div className="d-flex my-4">
                <div className="widget-icon">
                    <Icon name={iconName} />
                </div>
                <div>
                    <div className="fw-bold">{header}</div>
                    <div className="text-secondary">{content}</div>
                </div>
            </div>
        </li>
    )
}

const CompanyItem = ({ header, content }) => {

    return (
        <div className="d-flex justify-content-between align-items-center py-2">
            <div className="fw-bold h4 m-0">{header}</div>
            <div className="text-secondary">{content}</div>
        </div>
    )
}