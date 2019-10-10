import React from 'react';
import logo from './assets/logo.svg'

import './App.css';


function App() {
  return (
    <div className="container">
     <img src={logo} alt="aircnc"></img>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre talentos para sua empresa
        </p>
        <form>
          <label htmlFor="email">E-MAIL</label>
          <input 
              type="email" 
              id="email" 
              placeholder="Seu melhor email" />

              <button type="submit"> Entrar</button>
        </form>
        
      </div>
    </div>
  );
}

export default App;
