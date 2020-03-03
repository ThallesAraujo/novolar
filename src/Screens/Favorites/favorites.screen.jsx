import './favorites.css'
import React from 'react'
import BuildingCard from '../../Components/BuildingCard/building-card.component'

const FavoritesScreen = ({ handlers }) => {

  const buildings = handlers.getFavorites()

  if(buildings.lenght){
    return (
      <div className="container">
        <div className="cards-container">
          {buildings.map(building => {
            return <BuildingCard handlers={handlers} building={building} />
          })}
        </div>
      </div>
  
    )
  }else{
    return (
      <div className="container-full">
        <i className="fas fa-home"></i>
        <h1>Você ainda não salvou nenhum imóvel favorito.</h1>
      </div>
    )
  }
  
}

export default FavoritesScreen


