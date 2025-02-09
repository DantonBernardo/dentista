import './style.css';
import aboutimg from '../../images/dentista2.png';

export default function About(){
  return(
    <div className="about-container" id="about">
      <div className='aboutimg'>
        <img src={aboutimg} alt="Dentista"/>
      </div>
      <div className='info'>
        <span>Transformando vidas através de sorrisos</span>
        <h2 className='slogan'>O sorriso que você merece</h2>
        <p className='text'>Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt</p>
        <div className='buttons'>
          <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
            <button className='schedule'>Agende sua consulta!</button>
          </a>
        </div>
      </div>
    </div>
  );
};