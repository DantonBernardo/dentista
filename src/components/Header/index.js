import '../Header/style.css';
import Logo from '../../images/logo.png';
import whatsappicon from '../../images/whatsapp.png';

export default function Header() {
  return (
    <div>
      <div className='header-container'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#ServicesProvided">Serviços</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feedback">Avaliações</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">Onde estamos</a>
                </li>
              </ul>
              <div className='button'>
                <button>Fale conosco</button>
              </div>
            </div>
            <div className='whatsapp'>
              <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                <img src={whatsappicon} alt='whatsapp'/>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};