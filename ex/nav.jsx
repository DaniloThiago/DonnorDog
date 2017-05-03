import React from 'react'

let btn, logout;

firebase.auth().onAuthStateChanged(function(user) {   
  if (!user) {    
    btn = <li><a href="./authentication.html" className="slide-section">ENTRAR</a></li>
  } else {
    btn = <li><a href="./authentication.html" className="slide-section">ADMIN</a></li>    
  }
});   

export default props => (
	<header id="header_bar" className="header">
    <div id="header-inner">
      <a href="#about" id="logo-donnordog"></a>
      <nav>
        <a  id="menu-icon">
          <i className="fa fa-bars hidden-sm hidden-md hidden-lg" aria-hidden="true"></i>
        </a>
        <ul>
          <li><a href="./" className="slide-section">HOME</a></li>
          <li><a href="./post.html" className="slide-section">SOLICITAR</a></li>
          {btn}
        </ul>
      </nav>
    </div>
  </header>

)