import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Icon, Label, Segment } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertismentService'
import Constant from '../../utils/constants'
import Helper from '../../utils/helper'

export default function EmployerJobAdverts() {

  const [jobAdverts, setJobAdverts] = useState([])

  let { employerId } = useParams()
  
  useEffect(() => {
    let jobAdvertService = new JobAdvertisementService()
    jobAdvertService.getEmployerJobAdverts(Constant.employerId).then(result => setJobAdverts(result.data.data))
  }, [])

  return (
    <div className="w-75 m-auto">
      <div className="position-relative w-75 m-auto pt-6">
        {
          jobAdverts.map(jobAdvert => (
            <Segment key={jobAdvert.id} className="row p-4 mb-4" as={NavLink} to={() => "/jobadvertisements/detail/" + jobAdvert.id}>
              <div className="col-md-9">
                <h3>{jobAdvert?.jobPosition?.jobName}</h3>
                <h4 className="text-dark">{jobAdvert?.employer?.companyName}</h4>
                {jobAdvert?.city?.cityName}<Icon disabled name='marker' />
              </div>
              <div className="col-md-3 ">
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <Label as='a' color='green' >
                    {jobAdvert?.workType?.name}
                  </Label>

                </div>
                <div>
                  <Label className="" as='a' >
                    {Helper.DateAgo(new Date(jobAdvert.releaseDate)) + " gün önce"}
                  </Label>
                </div>
              </div>
              <div className="top-right2">
                <IsApproved isActive={jobAdvert.isActive} />
              </div>
            </Segment>

          ))}
      </div>
    </div>
  )
}

const IsApproved=(props)=>{

  return(
    <div>
            <span>
                {
                    props.isActive
                        ? <Label color="green">Onaylı</Label>
                        : <Label color="red">Onaysız</Label>
                }
            </span>
        </div>
  )
}
