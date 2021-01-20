import React from 'react';
import './Currency.scss';

export default function Currency({ name, symbol, amount }) {
  return (
    <div className="currency">
      <span className="currencyName">{name}</span>
      <span className="currencyDots" />
      <span className="currencyAmount">{`${symbol}${amount}`}</span>
    </div>
  );
}
