import './buildings.css'
import React from 'react'
import useGlobal from '../../Store'
import BuildingCard from '../../Components/BuildingCard/building-card.component'

const BuildingsScreen = ({ handlers }) => {

    const [state] = useGlobal()

    const { buildings, currentPage, totalPages } = state.buildingsState
  
    return (
    <div className="container">
        <div className="cards-container">
          {buildings.map(building => {
              return <BuildingCard handlers={handlers} building={building} />
          })}
      </div>
      <div className="paginator">
        <button className="fill prev-page" onClick={handlers.handlePrevPage}>
            <i style={{"paddingRight": "0.5em"}} class="fas fa-chevron-circle-left"></i>
            Anterior
        </button>

        <span style={{"padding": "1em"}}>Página {currentPage} de {totalPages}</span>

        <button className="fill next-page" onClick={handlers.handleNextPage}>
            Próxima
            <i style={{"paddingLeft": "0.5em"}} class="fas fa-chevron-circle-right"></i>
        </button>
      </div>
    </div>
      
    )
  }
  
  export default BuildingsScreen
  

