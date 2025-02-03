import './style.css';

import streetUrl from '../../images/contact/street.png';
import whatsapp from '../../images/contact/whatsapp.png';
import instagram from '../../images/contact/instagram.png';

export default function Contact() {
  return (
    <div className="contact-container" id="Contact">
      <div className="info">
        <h2>Onde nos encontrar?</h2>
        <div className="street">
          <img src={streetUrl} alt="Icone rua"/>
          <span>Rua Aurora Cristalina, 2087, Bairro</span>
        </div>
        <div className="whatsapp">
          <img src={whatsapp} alt="Icone Whatsapp"/>
          <span> &#40;11&#41; 9 1234-5678</span>
        </div>
        <div className="instagram">
          <img src={instagram} alt="Icone Instagram"/>
          <span>@clinicadentista</span>
        </div>
      </div>
      <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114960.64378910672!2d-80.2537219823684!3d25.78640960502834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2zTWlhbWksIEZsw7NyaWRhLCBFVUE!5e0!3m2!1spt-BR!2sbr!4v1737738369287!5m2!1spt-BR!2sbr"
        width="100%"
        height="250px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      />
      </div>
    </div>
  );
}
