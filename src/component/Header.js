import React, { Fragment } from 'react'


// function Header(props) {
// La linea de arriba también serviria pero es mas elegante aplicar destructuring
function Header({ titulo }) {
    return (
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    );
}

export default Header;