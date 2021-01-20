import React from 'react';
import './card.scss';

export default function Card({ title, subtitle }) {
  return (
    <div className="card">
      <span className="cardTitle">{title}</span>
      <span className="cardSubtitle">{subtitle}</span>
    </div>
  );
}
