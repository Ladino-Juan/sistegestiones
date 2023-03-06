import Nav from "./components/Nav";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import emailjs from "@emailjs/browser";

function App() {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_bh4gfk7",
        "template_12b4asp",
        event.target,
        "FfHMfiFSNOd1ZuM3t"
      )
      .then(M.toast({ html: "Gracias por llenar el formulario!" }))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    const mediaQuery = window.matchMedia("(max-width: 480px)");
    if (mediaQuery.matches) {
      var modal = document.querySelectorAll(".modal");
      M.Modal.init(modal, {});
    }

    M.Sidenav.init(sidenav, {});
  });
  return (
    <div>
      <Nav />
      <Home formFunction={sendEmail} />
      <Footer />
    </div>
  );
}

export default App;
