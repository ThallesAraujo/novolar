import axios from 'axios'
import { getApiToken } from '../Utils/environment.utils'

export const getBuildings = (store, inPage) => {
    store.actions.changeSpinnerState(true)
    axios.get(`https://www.orulo.com.br/api/v2/buildings?page=${inPage}`, { headers: { Authorization: getApiToken() } })
    .then(response => {
        console.log('API_TOKEN:', getApiToken())
        console.table(response.data.buildings)
        store.actions.updateBuildingsState('buildings', response.data.buildings)
        store.actions.updateBuildingsState('totalPages', response.data.total_pages)
        store.actions.updateBuildingsState('currentPage', response.data.page)
        store.actions.changeSpinnerState(false)
        console.log("spinnerState -> ", store.state.showSpinner)
    })
}

export const favoriteUnfavorite = (store, building) => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    let newFavorites = []
    if (favorites !== null && favorites.length > 0){
        if(favorites.filter(it => it.id === building.id).length > 0){
            newFavorites = favorites.filter(it => it.id !== building.id)
        }else{
            newFavorites = [...favorites, building]
        }
    }else{
        newFavorites.push(building)
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    store.setState({ ...store.state})

}

export const getFavorites = (store) => {
    return JSON.parse(localStorage.getItem("favorites"));
}

export const isFavorited = (store, building) =>{
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if(favorites === null || favorites.length === 0){
        return false
    }else{
        return favorites.filter(it => it.id === building.id).length > 0
    }
}

export const selectBuilding = (store, building) => {
    localStorage.setItem("selectedBuilding", JSON.stringify(building));
}

export const getSelectedBuilding = (store) => {
    return JSON.parse(localStorage.getItem("selectedBuilding"));
}

export const changeSpinnerState = (store, visible) =>{
    try {
        store.setState({ ...store.state.buildingsState, showSpinner: visible })
    } catch (error) {
        console.log(error)
    }
}

export const updateBuildingsState = (store, property, value) => {
    try {
        const buildingsState = {
            ...store.state.buildingsState,
            [property]: value
        }
        store.setState({ ...store.state, buildingsState })
    } catch (error) {
        console.log(error)
    }
}

