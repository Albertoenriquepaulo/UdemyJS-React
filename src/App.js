// Enlace del proyecto donde esta el contenido de index.css
// https://gist.github.com/juanpablogdl/194c15d376391a67c46dd08817bf9ae4

import React, { Fragment, useState } from 'react';
import Header from './component/Header'
import Form from './component/Form'

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
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
        cantidad={cantidad}
      />
      <div className="container">
        <Form
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
