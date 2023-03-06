import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer light-blue darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">QUIENES SOMOS?</h5>
            <p className="grey-text text-lighten-4 text_justify">
              Somos empresa Colombiana, dedicada al desarrollo de sistemas de
              información (software) que constituyen soporte fundamental a la
              administración a través del registro lógico de los procesos en su
              organización. Facilitamos herramientas adecuadas a los diferentes
              sectores de producción y servicios. Nuestros desarrollo, ya
              validado en el mercado, permite garantizar aplicativos ajustados a
              las necesidades empresariales.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#servicios">
                  Servicios
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#contacto">
                  Contacto
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#nosotros">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        
      </div>
    </footer>
  );
};

export default Footer;
