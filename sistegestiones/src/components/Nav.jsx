import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className='light-blue darken-4 z-depth-0'>
     
      <a href="/" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
        
        <div className="container">
        <a href='/'><img src='https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png' width={'40px'} style={{marginTop: '10px'}}></img></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
        <li>
          <a href="#item1">Servicios</a>
        </li>
        <li>
          <a href="#item2">Contacto</a>
        </li>
        <li>
          <a href="#item3">Nosotros</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
