import React, { Fragment } from 'react'

/************************************************************************************** */
// function Header(props) {
// La linea de arriba también serviria pero es mas elegante aplicar destructuring
/**
function Header({ titulo }) {
    return (
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    );
}
 */

/************************************************************************************** */
// La función de arriba arroja el mismo resultado que esta, pero en esta el return está impicito
// el return puede o no usarse en esta
/**
const Header = ({ titulo }) => (
    <Fragment>
        <h1>{titulo}</h1>
    </Fragment>
);
 */

/************************************************************************************** */
/**
// También pudiera quitarle el Fragment
const Header = ({ titulo }) => (
    <h1>{titulo}</h1>
);
 */
// Si damos por implicito el return no podemos escribir codigo JS
// Por lo que si necesitamos escribir codigo Java hay que hacerlo de esta manera

/************************************************************************************** */
const Header = ({ titulo }) => {
    const suma = 2 + 3;
    return (
        <h1>{titulo} y la Suma es {suma}</h1>
    );
}

export default Header;