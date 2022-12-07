import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className='transparent z-depth-0'>
      <a href="/" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
        <div className="container">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
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
