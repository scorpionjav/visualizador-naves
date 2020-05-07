import React, { Fragment } from 'react';
import './Detail.scss';
import { useSelector } from 'react-redux';
import { numberFormat } from './../../utils';

const Detail = () => {

    const selected = useSelector(store => store.starship.starshipSelected);

    return selected && (
        <Fragment>
            <div className="detail-container">
                <div className="text-title">{ selected.name }</div>
                <div className="text-description border-bottom">{ selected.model }t</div>

                <div className="text-title-2">Fabricante</div>
                <div className="text-description">{ selected.manufacturer }</div>

                <div className="text-title-2">Largo</div>
                <div className="text-description">{ `${numberFormat(selected.length)} fts.` } </div>

                <div className="text-title-2">Valor</div>
                <div className="text-description">
                    { selected.cost_in_credits !== 'unknown' ? `${numberFormat(selected.cost_in_credits)} créditos` : 'desconocido' }
                </div>

                <div className="text-title-2">Cantidad pasajeros</div>
                <div className="text-description">{ numberFormat(selected.passengers) }</div>
            </div>
            <div className="detail-container passengers">
                <div className="text-title border-bottom">Pasajeros</div>
                {
                    selected.passengersNames.length > 0
                    ? selected.passengersNames.map((p,i) => (<div className="text-description" key={i}>{p}</div>))
                    : <div className="text-description">Información no disponible</div>
                }
            </div>
        </Fragment>
    )
}

export default Detail;