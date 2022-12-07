import React from 'react'

const Home = (props) => {
  return (
    <div>
      <video autoPlay muted loop>
        <source src="/assets/Transport_bg.mp4" type="video/mp4" />
      </video>
      <div className="viewport-header">
        <h1 className="title">
          impulsa tú
          <span>empresa</span>
        </h1>
      </div>
      <div className="services row">
        <div className="container">
          <div className="col s12 m4">
            <div className="card white">
              <div className="card-content grey-text">
                <span className="card-title center-align">Desarrollo de software</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card white">
              <div className="card-content grey-text">
                <span className="card-title center-align">Sistema biometrico</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card white">
              <div className="card-content grey-text">
                <span className="card-title center-align">Sistema Logístico </span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m7 center-align">
            <span className="basic_info">Misión</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, ex est amet enim labore alias velit iusto adipisci
              earum ad similique cupiditate eligendi dolor corrupti, omnis
              perspiciatis delectus eveniet temporibus!
            </p>
            <br></br>
            <br></br>
            <span className="basic_info">Visión</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sed
              quaerat odio repellendus, molestiae culpa! Numquam iste
              consectetur sunt illo expedita enim, sit, nobis iusto, cumque quod
              at consequuntur. Possimus.
            </p>
          </div>
          <div className="col s12 m5">
            <img
              className="meeting"
              src="/assets/meeting_sg.jpg"
              alt="meeting"
            />
          </div>
          <div className="form_container col s12 m12">
            <form className="col m12 s12" onSubmit={props.formFunction}>
              <span className="basic_info grey-text text-darken-4">
                Contáctanos
              </span>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    name="name"
                  />
                  <label for="first_name">Nombre</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    className="validate"
                    name="last_name"
                  />
                  <label for="last_name">Apellido</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    name="email"
                  />
                  <label for="email">Email</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Por favor ingresa un email valido
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    className="materialize-textarea"
                    name="message"
                  ></textarea>
                  <label for="icon_prefix2">Mensaje</label>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light grey"
                type="submit"
                name="action"
              >
                Enviar
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
