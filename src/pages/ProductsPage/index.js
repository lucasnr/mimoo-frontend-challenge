import React, { useState, useCallback } from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';

import ProductList from './ProductList';
import {
	Container,
	Title,
	Subtitle,
	Points,
	Value,
	Tabs,
	TabLabel,
	Link,
} from './styles';

export default function ProductsPage() {
	const [products, setProducts] = useState({
		type: 'SKIN_CARE',
		items: [{ id: 1 }, { id: 2 }, { id: 3 }],
	});

	const handleSkinCareCheck = useCallback(() => {
		setProducts({
			type: 'SKIN_CARE',
			items: [{ id: 1 }, { id: 2 }, { id: 3 }],
		});
	}, []);

	const handleSnacksCheck = useCallback(() => {
		setProducts({
			type: 'SNACKS',
			items: [{ id: 1 }, { id: 2 }],
		});
	}, []);

	return (
		<main>
			<Container>
				<Title>Olá Carol</Title>
				<Subtitle>Adicione mais produtos à sua lista e ganhe pontos</Subtitle>

				<Points>
					<FaStar size={14} />
					<span>Pontos</span>
					<Value>100</Value>
				</Points>

				<Tabs>
					<input
						type="radio"
						name="tab"
						id="skin-care"
						defaultChecked
						onChange={handleSkinCareCheck}
					/>
					<TabLabel htmlFor="skin-care">Skin Care</TabLabel>

					<input
						type="radio"
						name="tab"
						id="snacks"
						onChange={handleSnacksCheck}
					/>
					<TabLabel htmlFor="snacks">Snacks</TabLabel>
				</Tabs>

				{products.type === 'SKIN_CARE' && (
					<ProductList
						brand="NIVEA"
						itemBg={'#ceb5ab'}
						items={products.items}
					/>
				)}

				{products.type === 'SNACKS' && (
					<ProductList
						brand="Nestlé"
						itemBg={'#ABC3CE'}
						items={products.items}
					/>
				)}
			</Container>
			<Link to="/barcode">
				<FaPlus size={32} />
			</Link>
		</main>
	);
}
