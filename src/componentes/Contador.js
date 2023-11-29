import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };
  const decrementarContador = () => {
    if (contador > 0) {
        setContador(contador - 1);
    } 
};


  return (
    <div className='App'>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador} className='boton'>Incrementar</button>
      <button onClick={decrementarContador} className='boton'>Decrementar </button>
    </div>
  );
}

export default Contador;