import React from 'react';
import './Card.scss';

export default function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      {title && <span className="cardTitle">{title}</span>}
      {subtitle && <span className="cardSubtitle">{subtitle}</span>}
      {children && <div>{children}</div>}
    </div>
  );
}
