import React, { Fragment } from 'react';
import './Detail.scss';
import { useSelector } from 'react-redux';
import { numberFormat } from './../../utils';

const Detail = () => {

    const selected = useSelector(store => store.starship.starshipSelected);

    return selected.loading
    ? (
        <div className="detail-container">
            <div className="text-description">Cargando...</div>
        </div>
    )
    : selected.data.length > 0 && (
        <Fragment>
            <div className="detail-container">
                <div className="text-title">{ selected.data.name }</div>
                <div className="text-description border-bottom">{ selected.data.model }t</div>

                <div className="text-title-2">Fabricante</div>
                <div className="text-description">{ selected.data.manufacturer }</div>

                <div className="text-title-2">Largo</div>
                <div className="text-description">{ `${numberFormat(selected.data.length)} fts.` } </div>

                <div className="text-title-2">Valor</div>
                <div className="text-description">
                {
                    selected.data.cost_in_credits !== 'unknown'
                    ? `${numberFormat(selected.data.cost_in_credits)} créditos`
                    : 'desconocido'
                }
                </div>

                <div className="text-title-2">Cantidad pasajeros</div>
                <div className="text-description">{ numberFormat(selected.data.passengers) }</div>
            </div>
            <div className="detail-container passengers">
                <div className="text-title border-bottom">Pasajeros</div>
                {
                    selected.data.passengersNames.length > 0
                    ? selected.data.passengersNames.map((p,i) => (<div className="text-description" key={i}>{p}</div>))
                    : <div className="text-description">Información no disponible</div>
                }
            </div>
        </Fragment>
    )
}

export default Detail;