import React from 'react';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';

export default function Wallet({ title, subtitle }) {
  return (
    <Panel>
      <Card title={title} subtitle={subtitle} />
    </Panel>
  );
}
