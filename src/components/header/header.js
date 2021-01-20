import React from 'react';
import './header.scss';

export default function Header({ title }) {
  return (
    <div className="header">
      <span className="headerTitle">{title}</span>
    </div>
  );
}
