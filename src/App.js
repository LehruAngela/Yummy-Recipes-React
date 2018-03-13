import React from 'react';
import './styles/css/style.css'
import {Route, Switch} from 'react-router-dom';
import Notification from 'react-notify-toast';
import { LandingPage } from "./components/landingpage";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { Navbar } from './components/navbar';
import { ViewCategory } from "./components/viewCategories";
import { CreateCategory } from './components/createCategory';
import { CreateRecipe } from './components/createRecipe';
import { EditCategory } from './components/editCategory';
import { ViewRecipe } from './components/viewRecipes';
import {EditRecipe} from './components/editRecipe'
import {ResetPassword} from './components/resetPassword'


class App extends React.Component {
    render() {
        return (
          <div>
            <Notification />
            <Switch>
                <Route exact path='#' component={LandingPage} />
                <Route exact path='/' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/categories' component={ViewCategory} />
                <Route exact path='/createcategory' component={CreateCategory} />
                <Route exact path='/categories/:category_id' component={EditCategory} />
                <Route exact path='/categories/:category_id/createrecipes' component={CreateRecipe} />
                <Route exact path='/categories/:category_id/viewrecipes' component={ViewRecipe} />
                <Route exact path='/categories/:category_id/editrecipes/:recipe_id' component={EditRecipe} />
                <Route exact path='/resetpassword' component={ResetPassword} />

            </Switch>
          </div>
        );
      }
}
export default App;
