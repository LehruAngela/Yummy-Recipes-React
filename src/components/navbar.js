import React from "react";
import Logout from "./logout";
import logout from "./logout";

export const Navbar = props => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light margin">
  <a class="navbar-brand" href="#">Yummy Recipes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/categories">Home<span class="sr-only">(current)</span></a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> */}
    </ul>
    <Logout/>
  </div>
</nav>
        );
    }
