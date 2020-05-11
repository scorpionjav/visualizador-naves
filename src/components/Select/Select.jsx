import React, { useEffect } from 'react';
import './Select.scss';
import { useDispatch, useSelector } from 'react-redux';
import starshipGellAllAsyncActionCreator from './../../store/modules/starship/actions.get-all';
import starshipSelectedAsyncActionCreator from './../../store/modules/starship/actions.selected';

const Select = () => {

  const dispatch = useDispatch();
  const starships = useSelector(store => store.starship.starshipGetAll);

  useEffect(() => {
      dispatch(starshipGellAllAsyncActionCreator());
  }, [dispatch]);

  const handleSelect = (e) => {
    e.persist();
    const index = e.target.value;
    index !== 'default' && dispatch(starshipSelectedAsyncActionCreator(starships.data[index]));
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