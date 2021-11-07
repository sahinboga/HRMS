import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Icon, Label, Segment } from 'semantic-ui-react'
import { addFavorite } from '../../store/actions/favoriteJobAdvertactions'
import Helper from '../../utils/helper'
import AddFavorite from './AddFavorite'

export default function JobAdvertPost({ jobAdvert }) {

    return (
        <div className="position-relative w-75 m-auto ">
            <Segment className="row p-4 mb-4" as={NavLink} to={"/jobseeker/jobadvertisements/detail/" + jobAdvert.id}>
                <div className="col-md-9">
                    <h3>{jobAdvert.jobPosition.jobName}</h3>
                    <h4 className="text-dark">{jobAdvert.employer.companyName}</h4>
                    {jobAdvert.city.cityName}<Icon disabled name='marker' />
                </div>
                <div className="col-md-3 ">
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <Label as='a' color='green' >
                            {jobAdvert.workType?.name}
                        </Label>

                    </div>
                    <div>
                        <Label className="" as='a' >
                            {Helper.DateAgo(new Date(jobAdvert.releaseDate)) + " gün önce"}
                        </Label>
                    </div>
                </div>

            </Segment>
            <div className="top-right">

                <AddFavorite jobAdverts={jobAdvert} />
            </div>
        </div>
    )
}
