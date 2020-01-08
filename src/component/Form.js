import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers';

const Form = (props) => {
    const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;
    // Definir el State

    /**
        const leerCantidad = (e) => {
            guardarCantidad(+e.target.value);
            console.log(guardarCantidad);
        }
     */

    //Definir state
    const [error, guardarError] = useState(false)
    // Cuando el usuario hace submit
    const calcularPrestamo = e => {
        e.preventDefault();
        console.log(':0 -> ', plazo);
        // Validar 
        if (cantidad === 0 || plazo === '' || plazo === 0) {
            guardarError(true);
            console.log(':0');
            return;
        }
        // Eliminar el error previo
        guardarError(false);
        // Habilitar Spinner
        guardarCargando(true);
        setTimeout(() => {
            // Realizar Cotización
            const total = calcularTotal(cantidad, plazo);
            // Una vez calculado, guardarTotal
            guardarTotal(total);
            // Deshabilitar Spinner
            guardarCargando(false);
        }, 2000);



    }


    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                {cantidad}
                {plazo}
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={(e) => guardarCantidad(+e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={(e) => guardarPlazo(+e.target.value)}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}

        </Fragment>

    );
}

export default Form;