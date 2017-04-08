import React from 'react'
import '../public/css/nav.css'

export default props => (
	<header id="header_bar" className="header">
    <div id="header-inner">
      <a href="#about" id="logo-donnordog"></a>
      <nav>
        <a  id="menu-icon"></a>
        <ul>
          <li><a href="./" className="slide-section">HOME</a></li>
          <li><a href="./authentication.html" className="slide-section">ENTRAR</a></li>
        </ul>
      </nav>
    </div>
  </header>

)