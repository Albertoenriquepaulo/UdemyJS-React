// Enlace del proyecto donde esta el contenido de index.css
// https://gist.github.com/juanpablogdl/194c15d376391a67c46dd08817bf9ae4

import React, { Fragment } from 'react';
import Header from './component/Header'

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Header />
    // </div>
    // Sid escomentamos lo de arriba haria lo mismo que lo de Fragment
    // Pero para usar Fragment hay que incluirlo en el import
    <Fragment>
      <Header />
      <Header />
    </Fragment>
  );
}

export default App;
