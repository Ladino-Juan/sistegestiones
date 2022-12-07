import Nav from './components/Nav'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import emailjs from '@emailjs/browser';


function App() {

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_ekzdhim', 'template_237behg', event.target, 'GoSOYH-N1L76Bmn1u')
    .then(M.toast({ html: 'Gracias por llenar el formulario!' }))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  })
  return (
    <div>
      <Nav />
      <Home formFunction={sendEmail}/>
      <Footer />
    </div>
  )
}

export default App
