import React, { useEffect } from 'react';
import './Select.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as starshipActions from './../../store/modules/starship/actions';

const Select = () => {

  const dispatch = useDispatch();
  const starships = useSelector(store => store.starship.starshipGetAll);

  useEffect(() => {
      dispatch(starshipActions.starshipGellAllAsyncActionCreator());
  }, [dispatch]);

  const handleSelect = (e) => {
    e.persist();
    const index = e.target.value;
    index !== 'default' && dispatch(starshipActions.starshipSelectedActionCreator(starships.data[index]));
  };

  return (
    <select className="custom-select" onChange={handleSelect}>
      <option value="default" hidden>
        {
          starships.loading
          ? 'Cargando...' : starships.data.length > 0
          ? 'Seleccione una nave...' : 'No hay naves...'
        }
      </option>
      {
        starships.data.length > 0 && starships.data.map((s,i) => (<option key={i} value={i}>{ s.name }</option>))
      }
    </select>
  )
}

export default Select;