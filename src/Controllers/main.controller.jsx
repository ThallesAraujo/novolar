import React from 'react'
import MainScreen from '../Screens/Main/main.screen';

const MainController = () => {

    localStorage.setItem("favorites", JSON.stringify([]));
    localStorage.setItem("selectedBuilding", JSON.stringify({}));
    return <MainScreen/>
}

export default MainController