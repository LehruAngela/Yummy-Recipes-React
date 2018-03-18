import React from 'react';
import './styles/css/style.css'
import {Route, Switch} from 'react-router-dom';
import Notification from 'react-notify-toast';
import { Register } from "./components/register";
import { Login } from "./components/login";
import { ViewCategory } from "./components/viewCategories";
import { CreateCategory } from './components/createCategory';
import { CreateRecipe } from './components/createRecipe';
import { EditCategory } from './components/editCategory';
import { ViewRecipe } from './components/viewRecipes';
import {EditRecipe} from './components/editRecipe';
import {ResetPassword} from './components/resetPassword';
import {PageNotFound} from './components/pageNotFound';
import {PrivateRoute} from './components/privateRoutes';
import BrowserRouter from 'react-router-dom/BrowserRouter';

const App = (props) => {
        return (
          <BrowserRouter>
          <div>
            <Notification />
            <Switch>
                <Route exact path='/' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/categories' component={ViewCategory} />
                <PrivateRoute exact path='/createcategory' component={CreateCategory} />
                <PrivateRoute exact path='/categories/:category_id' component={EditCategory} />
                <PrivateRoute exact path='/categories/:category_id/createrecipes' component={CreateRecipe} />
                <PrivateRoute exact path='/categories/:category_id/viewrecipes' component={ViewRecipe} />
                <PrivateRoute exact path='/categories/:category_id/editrecipes/:recipe_id' component={EditRecipe} />
                <Route exact path='/resetpassword' component={ResetPassword} />
                <Route component={PageNotFound}/>
            </Switch>
          </div>
          </BrowserRouter>
        )
}
export default App;
