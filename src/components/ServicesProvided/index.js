import './style.css';
import CardServices from '../../components/CardServices';

import LimpezaUrl from '../../images/servicesp/clean.png';
import AparelhoUrl from '../../images/servicesp/toothbrace.png'
import ProtesesUrl from '../../images/servicesp/prosthesis.png'
import ClareamentoUrl from '../../images/servicesp/toothwhitening.png';
import CanalUrl from '../../images/servicesp/toothextraction.png';
import RadiografiasUrl from '../../images/servicesp/xray.png';
import EmergencialUrl from '../../images/servicesp/warning.png';
import PeriodontiaUrl from '../../images/servicesp/periodontia.png';

export default function ServicesProvided(){
  const services = [
    {
      id: 1,
      name: 'Limpeza',
      imgUrl: LimpezaUrl,
    },
    {
      id: 2,
      name: 'Aparelho',
      imgUrl: AparelhoUrl,
    },
    {
      id: 3,
      name: 'Próteses',
      imgUrl: ProtesesUrl,
    },
    {
      id: 4,
      name: 'Clareamento',
      imgUrl: ClareamentoUrl,
    },
    {
      id: 5,
      name: 'Tratamento de canal',
      imgUrl: CanalUrl,
    },
    {
      id: 6,
      name: 'Radiografias',
      imgUrl: RadiografiasUrl,
    },
    {
      id: 7,
      name: 'Atendimento Emergencial',
      imgUrl: EmergencialUrl,
    },
    {
      id: 8,
      name: 'Periodontia',
      imgUrl: PeriodontiaUrl,
    },
  ]

  return(
  <div className='services-container' id='ServicesProvided'>
    <div className='services'>
      <div className='title'>
        <h2>Quais nossos serviços?</h2>
      </div>
      <div className='cards'>
        {services.map((x) => (
          <CardServices
            key={x.id}
            imgUrl={x.imgUrl}
            alt={x.name}
            name={x.name}
          />
        ))}
      </div>
    </div>
    <div className='schedule'>
      <div className='text'>
        <span>Venha fazer parte dessa história!</span>
      </div>
      <div className='button'>
        <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <button>Agendar agora!</button>
        </a>
      </div>
    </div>
  </div>
  );
};