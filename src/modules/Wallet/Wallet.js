import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import Currency from '../../components/Currency/Currency';
import { load } from '../../store/wallet';

export default function Wallet({ title, subtitle }) {
  const dispatch = useDispatch();
  const { currencies } = useSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  return (
    <Panel>
      <Card title={title} subtitle={subtitle}>
        {currencies.map((currency) => (
          <Currency key={currency.name} {...currency} />
        ))}
      </Card>
    </Panel>
  );
}
