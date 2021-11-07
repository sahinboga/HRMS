import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { addFavorite, deleteFavorite } from '../../store/actions/favoriteJobAdvertactions'
import Constant from '../../utils/constants'

export default function AddFavorite({jobAdverts}) {
    const favorites = useSelector(state => state.favorites)
    const [favori, setFavori] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const fav= favorites.data.find(f=>f.jobAdvert.id==jobAdverts.id)
        setFavori(fav)
        console.log(fav)
    }, [favorites.data])
   

    const changeFavoriteClick=(values)=>{
        values={...values,jobSeeker:{id:Constant.JobSeekerId}}

        
        if(favori){
            dispatch(deleteFavorite(favori.favoriteId))
        }
        else{
            dispatch(addFavorite(values))
        }
    }
    return (
        <span>
            <button className="btn btn-favorite" onClick={()=> changeFavoriteClick({jobAdvert:jobAdverts})}><Icon name={!!favori?"heart":"heart outline"} color="red" size="large"/></button>
        </span>
    )
}
