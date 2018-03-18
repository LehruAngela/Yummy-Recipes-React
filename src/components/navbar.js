import React from "react";
import Logout from "./logout";
import Profile from './profile';

export const Navbar = props => {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="black">
        <a class="navbar-brand">Yummy Recipes</a>
      </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/categories" className="btn btn-light" >Categories<span class="sr-only">(current)</span></a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> */}
          </ul>
          <Profile/>
          <Logout/>
        </div>
      </nav>
      );
    }
export default Navbar;
