import React from 'react'
import FavoritesScreen from '../Screens/Favorites/favorites.screen';
import useGlobal from '../Store'

const FavoritesController = () => {

    const [, actions ] = useGlobal()

    

    const favoriteUnfavorite = (building) => {
        actions.favoriteUnfavorite(building)
    }

    const isFavorited = (building) => {
        return actions.isFavorited(building)
    }

    const getFavorites = () => {
        return actions.getFavorites()
    }
    
    const handleSelectBuilding = (building) =>{
        actions.selectBuilding(building)
    }


    const handlers = {
        favoriteUnfavorite,
        isFavorited,
        getFavorites,
        handleSelectBuilding
    }

    return <FavoritesScreen handlers={handlers}/>
}

export default FavoritesController