import React from 'react'
import { useSelector } from 'react-redux'
import JobAdvertPost from '../../components/jobAdvertisement/JobAdvertPost'


export default function FavoriteJobAdvertList() {
    const favorites = useSelector(state => state.favorites)
    return (
        <div>
            <div className="w-75 m-auto">
                <div className="py-3">
                    {
                        favorites?.data?.map(favorite => (
                            <JobAdvertPost jobAdvert={favorite.jobAdvert}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
