import React from 'react';
import BuildingsController from './Controllers/buildings.controller';
import MainController from './Controllers/main.controller';
import FavoritesController from './Controllers/favorites.controller';
import DetailsController from './Controllers/details.controller';
import Navbar from './Components/Navbar/nav.component'
import Footer from './Components/Footer/footer.component'
import Spinner from './Components/Spinner/spinner.component';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {

    return (
      <Router>
        <Spinner  />
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact={true} component={MainController}></Route>
            <Route path="/imoveis" component={BuildingsController}></Route>
            <Route path="/favoritos" component={FavoritesController}></Route>
            <Route path="/detalhes" component={DetailsController}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
  

export default App;
