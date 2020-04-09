import React from 'react';

import { Container, Header, Brand, List, Item } from './styles';

import map from '../../../assets/img/icons/map.svg';

export default function ProductList({ brand, itemBg, items }) {
  return (
    <Container>
      <Header>
        <img src={map} alt="Ícone de local no mapa" />
        <Brand>{brand}</Brand>
      </Header>

      <List>
        {items.map((item) => (
          <Item key={item.id} itemBg={itemBg} />
        ))}
      </List>
    </Container>
  );
}
