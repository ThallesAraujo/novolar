import React from 'react'
import './building-card.css'
import { withRouter } from 'react-router-dom'

const BuildingCard = (params) => {

    const building = params.building
    const handlers = params.handlers

    const handleClick = (building) => {

        handlers.handleSelectBuilding(building)
        params.history.push("/detalhes")
    }

    const getBuildingDescription = (description) =>{
        if (description.length > 150){
            return description.substring(0, 150)+"..."
        }else{
            return description
        }
    }

    return (
        <div className="card">
                      <img src={building.default_image["520x280"]} onClick={() => handleClick(building)} className="card-image" alt={building.name}/>
                      <div className="card-text-container">
                        <h3 className="card-title title-link" onClick={() => handleClick(building)} style={{"cursor": "pointer"}}>{building.name}</h3>
                        <h4 onClick={() => handleClick(building)}>{getBuildingDescription(building.description)}</h4>
                        <div className="details">
                            <span onClick={() => handleClick(building)} className="indicator" title="número máximo de quartos">
                                <i class="fas fa-bed"></i>
                                <p>{building.max_bedrooms}</p>
                            </span>
                            <span onClick={() => handleClick(building)} className="indicator" title="número máximo de banheiros">
                                <i class="fas fa-shower"></i>
                                <p>{building.max_bathrooms}</p>
                            </span>
                            <span onClick={() => handleClick(building)} className="indicator" title="número máximo de vagas de estacionamento">
                                <i class="fas fa-car"></i>
                                <p>{building.max_parking}</p>
                            </span>
                            <button class={handlers.isFavorited(building) ? 'favorited': ''} onClick={() => handlers.favoriteUnfavorite(building)}>
                                <i class="fas fa-star"></i>
                                {handlers.isFavorited(building) ? 'Remover favorito': 'Adic. aos favoritos'}
                            </button>
                        </div>
                      </div>
                  </div>
    )

}

export default withRouter(BuildingCard)