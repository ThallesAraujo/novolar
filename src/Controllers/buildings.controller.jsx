import React, { useEffect } from 'react'
import BuildingsScreen from '../Screens/Buildings/buildings.screen';
import useGlobal from '../Store'

const BuildingsController = () => {

    const [ state, actions ] = useGlobal()

    useEffect(() => {
        try{
            actions.getBuildings(state.buildingsState.currentPage)
        }catch(error){
            const { code, message } = error;
            console.warn(code, message);
        }
    },[])

    const handleNextPage = () =>{
        const {currentPage, totalPages} = state.buildingsState
        if (currentPage < totalPages) {
            actions.getBuildings(currentPage + 1)
        }

    }

    const handlePrevPage = () =>{
        const {currentPage} = state.buildingsState
        if (currentPage > 1) {
            actions.getBuildings(currentPage - 1)
        }

    }

    const handleSelectBuilding = (building) =>{
        actions.selectBuilding(building)
    }

    const favoriteUnfavorite = (building) => {
        actions.favoriteUnfavorite(building)
    }

    const isFavorited = (building) => {
        return actions.isFavorited(building)
    }

    const handlers = {
        handleNextPage,
        handlePrevPage,
        favoriteUnfavorite,
        handleSelectBuilding,
        isFavorited
    }

    return <BuildingsScreen handlers={handlers}/>
}

export default BuildingsController