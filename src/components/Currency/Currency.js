import React from 'react';
import './Currency.scss';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/wallet';

export default function Currency({ name, symbol, amount }) {
  const dispatch = useDispatch();

  const isNegative = amount < 0;

  return (
    <div className={`currency ${isNegative ? 'currencyIsNegative' : ''}`}>
      <span className="currencyName">{name}</span>
      <span className="currencyDots" />
      <span className="currencyAmount">{`${symbol}${amount}`}</span>
      <span className="currencyButtons">
        <button onClick={() => dispatch(increment(name, 100))}>+</button>
        <button onClick={() => dispatch(decrement(name, 200))}>-</button>
      </span>
    </div>
  );
}
