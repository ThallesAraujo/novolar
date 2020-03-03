import './details.css'
import React from 'react'
import useGlobal from '../../Store'
import NumberFormat from 'react-number-format';

const DetailsScreen = (params) => {
    const handlers = params.handlers
    const building = handlers.getSelectedBuilding()

    return(
        <div className="container-details">
            <h1 className="title">{building.name}</h1>
            <div className="horizontal-container">
                <img src={building.default_image["520x280"]} alt={building.name}/>
                <div className="vertical-container">
                <div className="padded">
                    <h2 className="price">Preço: <NumberFormat displayType={'text'} value={building.min_price} decimalSeparator={','} thousandSeparator={'.'} prefix={'R$ '} ></NumberFormat>
                    </h2>
                </div>
                <div className="cards-container cards-building-details">
                    <div className="card">
                        <div className="card-text-container">
                            <i class="fas fa-bed"></i>
                            <p>Máx. Quartos: {building.max_bedrooms} (Máx Suites: {building.max_suites})</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-text-container">
                            <i class="fas fa-shower"></i>
                            <p>Máx. Banheiros: {building.max_bathrooms}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-text-container">
                            <i class="fas fa-car"></i>
                            <p>Máx. Vagas Estacion.: {building.max_parking}</p>
                        </div>
                    </div>
                </div>
                <div className="padded centered">
                    <button class={handlers.isFavorited(building) ? 'favorited btn-big': 'btn-big'} onClick={() => handlers.favoriteUnfavorite(building)}>
                        <i class="fas fa-star" style={{"paddingRight": "1em"}}></i>
                            {handlers.isFavorited(building) ? 'Remover favorito': 'Adicionar aos favoritos'}
                        </button>
                </div>
                </div>
            </div>

            <div className="description-container">
                <h3>{building.description}</h3>
                <div className="description-container">
                    <p>Finalidade: {building.finality}</p>
                    <p>Preço por /m²  <NumberFormat displayType={'text'} value={building.price_per_private_square_meter} decimalSeparator={','} thousandSeparator={'.'} prefix={'R$ '} ></NumberFormat></p>
                </div>
                <div className="description-container">
                    <h3 className="sub-title">Endereço:</h3>
                    <p>{building.address.street_type} {building.address.street}, {building.address.number}</p>
                    <p>Bairro {building.address.area}, {building.address.city}-{building.address.state}</p>
                    <p>CEP: {building.address.zip_code}</p>
                </div>

            </div>
        </div>
    )

}
export default DetailsScreen