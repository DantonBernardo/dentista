import React from 'react';
import './style.css';

export default function Error() {
  return (
    <div className='error-container'>
      <h1>Ocorreu algo errado</h1>
      <a href='/'>
        <button>Voltar para página inicial</button>
      </a>
    </div>
  );
}
