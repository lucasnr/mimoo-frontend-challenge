import React from 'react';

import { Container, Header, Brand, List, Item } from './styles';

import map from '../../../assets/img/icons/map.svg';

export default function ProductList({ brand, itemBg, items, display }) {
	return (
		<Container display={display}>
			<Header>
				<img src={map} alt="Ícone de local no mapa" />
				<Brand>{brand}</Brand>
			</Header>

			<List>
				{items.map((item) => (
					<Item key={item.name} image={item.image} itemBg={itemBg} />
				))}
			</List>
		</Container>
	);
}
