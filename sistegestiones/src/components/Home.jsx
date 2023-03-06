import React from "react";
import { useState } from "react";

const Home = (props) => {
  const moduleTextObject = {
    predefinido:
      "Nuestro objetivo es el de contribuir al Mejoramiento y la Calidad de la Información Empresarial, mediante herramientas automatizadas, de mando y, operativas, eficientes y efectivas. Estimular uso y beneficios de, los sistemas de información, generando empleo productivo y mejorando, la calidad de vida de nuestros funcionarios, ¿ha pensado que el registro de horas laboradas y los controles de asistencia en su empresa deben ser más eficientes y se necesita de mejoras para la toma de decisiones?",
    biometrico:
      "Los datos biométricos son los datos personales relativos a las características únicas del ser humano, sean físicas, fisiológicas o asociadas al comportamiento, que faciliten y garanticen la identificación de un individuo (persona física), mediante sistemas o procedimientos tecnológicos.",
    contratacion:
      "Es el sistema ideal para contratistas que requieren agendar servicios de transportes, instalaciones entre otras,  es un sistema de fácil y rápido manejo amigable con el usuario final y con una serie de controles y validaciones que garantizan que la información contenida de su empresa es segura,  sistegestiones contratación tiene línea de acceso desde la central de operaciones y con módulos directos a quienes están en las calles realizando las tareas asignadas, estos módulos cuentas con control directo desde la central permitiendo que sea conocido el paso a paso de cada uno de las personas que intervienen en los diferentes servicios, sea un instalador, se un conductor según la empresa que utilice nuestro sistema. Totalmente funcional en todos los dispositivos móviles.",
    transporte:
      "Desarrollado en sistemas de información de fácil manejo y con opciones de análisis directos, mediante informes que se pueden exportar o ver en pantalla, ideal seguridad para la alta Gerencia quien tiene todo el peso de la responsabilidad ante los entes de control. 100% online, integra alertas con SMS a quien se designe recibirlos,  Sistegestiones Transporte contiene todos los módulos desde la vinculación del vehículo, pasando por financiera, gestión documental y con la elaboración del 100% de las cartas automáticas que la empresa necesite, es una herramienta totalmente funcional en todos los dispositivos móviles.",
    tienda:
      "Es una herramienta web que le permite integrar sus clientes en un lugar donde usted publica las imágenes de  sus productos, los clientes hacen sus pedidos de forma automática sin hacer llamadas, además el pedido se imprime automáticamente en su empresa, liberando del teléfono a sus funcionarios y transformando su local para preparar pedidos y despachar.",
    logistica:
      "En una sola plataforma controle horas laboradas, horas extras, llegadas antes o después del tiempo de horario. Conserve los registros día a día y tenga en un solo clic los históricos individuales o grupales de los tiempos de cada uno",
  };
  const [moduleText, setmoduleText] = useState([
    moduleTextObject.predefinido,
    "¿Qué somos?",
  ]);

  return (
    <div>
      <div className="circuitBackground">
        <div className="container row modulos">
          <div className="shapeWrapper col s12 m6 offset-m2">
            <img
              src="/assets/logoAnimado2.gif"
              className="logoAnimado"
              width={"400px"}
            ></img>

            <div
              class="shape deg-0 modal-trigger"
              href="#modal1"
              onClick={() =>
                setmoduleText([moduleTextObject.biometrico, "biometrico"])
              }
            >
              <span>BIOMETRICOS</span>
            </div>
            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>BIOMETRICOS</h4>
                <p>{moduleTextObject.biometrico}</p>
              </div>
               <div class="modal-footer">
              <a class="btn-floating btn-small waves-effect waves-light red modal-action modal-close"><i class="material-icons">close</i></a>
              </div>
            </div>
            <div
              class="shape deg-45 modal-trigger"
              href="#modal2"
              onClick={() =>
                setmoduleText([moduleTextObject.transporte, "transporte"])
              }
            >
              <span>TRANSPORTE</span>
            </div>
            <div id="modal2" class="modal">
              <div class="modal-content">
                <h4>TRANSPORTE</h4>
                <p>{moduleTextObject.transporte}</p>
              </div>
               <div class="modal-footer">
              <a class="btn-floating btn-small waves-effect waves-light red modal-action modal-close"><i class="material-icons">close</i></a>
              </div>
            </div>
            <div
              class="shape deg-90 modal-trigger"
              href="#modal3"
              onClick={() =>
                setmoduleText([moduleTextObject.contratacion, "contratación"])
              }
            >
              <span>CONTRATACIÓN</span>
            </div>
            <div id="modal3" class="modal">
              <div class="modal-content">
                <h4>CONTRATACIÓN</h4>
                <p>{moduleTextObject.contratacion}</p>
              </div>
              <div class="modal-footer">
              <a class="btn-floating btn-small waves-effect waves-light red modal-action modal-close"><i class="material-icons">close</i></a>
              </div>
            </div>
            <div
              class="shape deg-135 modal-trigger"
              href="#modal4"
              onClick={() =>
                setmoduleText([moduleTextObject.logistica, "logística"])
              }
            >
              <span>LOGÍSTICA</span>
            </div>
            <div id="modal4" class="modal">
              <div class="modal-content">
                <h4>LOGÍSTICA</h4>
                <p>{moduleTextObject.logistica}</p>
              </div>
               <div class="modal-footer">
              <a class="btn-floating btn-small waves-effect waves-light red modal-action modal-close"><i class="material-icons">close</i></a>
              </div>
            </div>
            <div class="shape deg-180 modal-trigger" href="#modal5">
              <span>SOFTWARE</span>
            </div>
            <div
              class="shape deg-225 modal-trigger"
              href="#modal6"
              onClick={() =>
                setmoduleText([moduleTextObject.tienda, "tienda virtual"])
              }
            >
              <span>TIENDA</span>
            </div>
            <div id="modal6" class="modal">
              <div class="modal-content">
                <h4>TIENDA</h4>
                <p>{moduleTextObject.tienda}</p>
              </div>
               <div class="modal-footer">
              <a class="btn-floating btn-small waves-effect waves-light red modal-action modal-close"><i class="material-icons">close</i></a>
              </div>
            </div>
            <div
              class="shape deg-270 modal-trigger"
              href="#modal7"
              onClick={() =>
                setmoduleText([moduleTextObject.predefinido, "¿Qué somos?"])
              }
            >
              <span>GESTIÓN</span>
            </div>
            <div id="modal7" class="modal">
              <div class="modal-content">
                <h4>¿Qué somos?</h4>
                <p>{moduleTextObject.predefinido}</p>
              </div>
               <div class="modal-footer">
              <a class="btn-floating btn-small waves-effect waves-light red modal-action modal-close"><i class="material-icons">close</i></a>
              </div>
            </div>
            <div class="shape deg-315 modal-trigger" href="#modal8">
              <span>Modulo2</span>
            </div>
          </div>
          <div
            className="col s4 moduloText"
            style={{ paddingTop: "15%", color: "black" }}
            id="servicios"
          >
            <span className="basic_info">{moduleText[1]}</span>
            <p>{moduleText[0]}</p>
          </div>
        </div>
      </div>
      <div className="container row" >
        <div className="col s12 m7 center-align" id="nosotros">
          <span className="basic_info">Misión</span>
          <p>
            Contribuir al Mejoramiento y la Calidad de la Información
            Empresarial, mediante herramientas automatizadas, de mando y
            operativas, eficientes y efectivas. Estimular uso y beneficios de
            los sistemas de información, generando empleo productivo y mejorando
            la calidad de vida de nuestros funcionarios.
          </p>
          <br></br>
          <br></br>
          <span className="basic_info">Visión</span>
          <p>
            En el 2024, seremos la empresa que genera confianza por su
            crecimiento y posicionamiento en el mercado. Reconocida por el
            desarrollo de software creados y las alianzas establecidas con
            entidades de nivel superior, públicas y privadas.
          </p>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col s4"><img src="/assets/cliente1.jpg" alt="cliente sistegestiones" width={'100%'} /></div>
            <div className="col s4"><img src="/assets/cliente2.jpg" alt="cliente sistegestiones" width={'100%'} /></div>
            <div className="col s4"><img src="/assets/cliente3.jpg" alt="cliente sistegestiones" width={'100%'} /></div>
            <div className="col s4"><img src="/assets/cliente4.jpg" alt="cliente sistegestiones" width={'100%'} /></div>
            <div className="col s4"><img src="/assets/cliente5.jpg" alt="cliente sistegestiones" width={'100%'} /></div>
            <div className="col s4"><img src="/assets/cliente6.jpg" alt="cliente sistegestiones" width={'100%'} /></div>
          </div>
          <span className="basic_info">Nuestros clientes</span>
        </div>
        <div className="col s12 m5">
          <img className="meeting" src="/assets/meeting_sg.jpg" alt="meeting" />
        </div>
        <div className="form_container col s12 m12" id="contacto">
          <form
            className="col m12 s12"
            onSubmit={props.formFunction}
          >
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
              className="btn waves-effect waves-light indigo"
              type="submit"
              name="action"
            >
              Enviar
              <i className="material-icons right">send</i>
            </button>
          </form>
          <div className="col m12 s12 regulacion">
            <span className="basic_info center-align">Quién nos regula?</span>
            <p>
              Nuestras soluciones administrativas en software, permite que la
              alta gerencia tenga tranquilidad de la información que se maneja
              en cada una de las empresas. Entendiendo la responsabilidad frente
              a los entes de control.
            </p>

            <div className="row regulacion">
              <img
                className="col s12 m4"
                width={"100%"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Dian_%28Colombia%29_logo.svg/2560px-Dian_%28Colombia%29_logo.svg.png"
                alt="entidad de regulacion"
              ></img>
              <img
                className="col s12 m4"
                width={"100%"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mintransporte_Colombia.svg/2560px-Mintransporte_Colombia.svg.png"
                alt="entidad de regulacion"
              ></img>
              <img
                className="col s12 m4"
                width={"100%"}
                src="https://www.transportesgomezhernandez.com/wp-content/uploads/2022/12/logo-supertransporte-2019-azul-768x245-1.png"
                alt="entidad de regulacion"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
