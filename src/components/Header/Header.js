import React from 'react';
import './Header.scss';

export default function Header({ title }) {
  return (
    <div className="header">
      <span className="headerTitle">{title}</span>
    </div>
  );
}
