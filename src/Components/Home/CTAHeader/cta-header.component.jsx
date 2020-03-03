import './cta-header.css'
import React from 'react'
import { withRouter } from 'react-router-dom'

const CTAHeader = ({history}) => {
    return (
        <div className="cta-container">
            <div className="cta-text">
                <p>Encontre seu novo imóvel.</p>
                <p>Sem complicações.</p>
                <h3>Chega de perder tempo procurando a casa ou o apê ideal!</h3>
                <h3>No Novolar você encontra sua nova morada rapidinho.</h3>
                <div className="cta-button-container">
                    <button className="fill cta-button" onClick={() => history.push('/imoveis')}>Ver Imóveis</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CTAHeader)