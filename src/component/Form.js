import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers';

const Form = ({ cantidad, guardarCantidad, plazo, guardarPlazo }) => {
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
        // Validar 
        if (cantidad === 0 || plazo === '') {
            guardarError(true);
            return;
        }
        // Eliminar el error previo
        guardarError(false);

        // Realizar Cotización
        const total = calcularTotal(cantidad, plazo);
        console.log(total);

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