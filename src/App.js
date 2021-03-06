// Enlace del proyecto donde esta el contenido de index.css
// https://gist.github.com/juanpablogdl/194c15d376391a67c46dd08817bf9ae4

import React, { Fragment, useState } from 'react';
import Header from './component/Header'
import Form from './component/Form'
import Mensaje from './component/Mensaje'
import Result from './component/Result'
import Spinner from './component/Spinner'

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;
  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />

  } else {
    componente = <Result
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }

  return (
    // <div className="App">
    //   <Header />
    //   <Header />
    // </div>
    // Sid escomentamos lo de arriba haria lo mismo que lo de Fragment
    // Pero para usar Fragment hay que incluirlo en el import
    <Fragment>
      <Header
        titulo='Cotizador de Prestamos'
      />
      <div className="container">
        <Form
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          //total={total} no es requerida esta variable
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
