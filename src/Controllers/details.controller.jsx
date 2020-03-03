import React from 'react'
import DetailsScreen from '../Screens/Details/details.screen';
import useGlobal from '../Store'

const DetailsController = () => {

    const [state , actions ] = useGlobal()

    const favorite = state.buildingsState.selectedBuilding    

    const favoriteUnfavorite = (building) => {
        actions.favoriteUnfavorite(building)
    }

    const isFavorited = (building) => {
        return actions.isFavorited(building)
    }

    const handleSelectBuilding = (building) =>{
        actions.selectBuilding(building)
    }

    const getSelectedBuilding = () =>{
        return actions.getSelectedBuilding()
    }

    const handlers = {
        favoriteUnfavorite,
        isFavorited,
        handleSelectBuilding,
        getSelectedBuilding
    }

    return <DetailsScreen handlers={handlers} building={favorite}/>
}

export default DetailsController