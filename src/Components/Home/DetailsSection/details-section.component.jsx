import './details-section.css'
import React from 'react'

const DetailsSection = () => {
    return (
        <div className="cards-container">
            <div className="card">
                <div className="card-text-container">
                <i className="fas fa-info-circle"></i>
                <h3 className="card-title">Informações detalhadas</h3>
                <h4>Os imóveis listados no Novolar possuem informações detalhadas: número de banheiros, vagas, suítes e preço por metro quadrado</h4>
                </div>
            </div>
            <div className="card">
                <div className="card-text-container">
                <i className="fas fa-building"></i>
                <h3 className="card-title">Para morar ou trabalhar</h3>
                <h4>Aqui, você encontra não somente um novo lar. Navegue entre diversos imóveis residenciais ou empresariais.</h4>
                </div>
            </div>
            <div className="card">
                <div className="card-text-container">
                <i className="fas fa-star"></i>
                <h3 className="card-title">Imóveis favoritos</h3>
                <h4>Favorite imóveis comparar e ver depois, a qualquer hora, em qualquer dispositivo.</h4>
                </div>
            </div>
        </div>
    )
}

export default DetailsSection