import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
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
	const user = useSelector((state) => state.user);
	const [tab, setTab] = useState(user.products[0].category);
	const { products, name } = user;

	const points = useMemo(() => {
		const allProducts = products
			.map((product) => product.brands)
			.flat()
			.map((brand) => brand.products)
			.flat();

		return allProducts.length * 100;
	}, [products]);

	return (
		<main>
			<Container>
				<Title>Olá {name}</Title>
				<Subtitle>Adicione mais produtos à sua lista e ganhe pontos</Subtitle>

				<Points>
					<FaStar size={14} />
					<span>Pontos</span>
					<Value>{points}</Value>
				</Points>

				<Tabs>
					{products.map((item, index) => (
						<React.Fragment key={item.category}>
							<input
								type="radio"
								name="tab"
								id={item.category}
								defaultChecked={index === 0}
								onChange={() => setTab(item.category)}
							/>
							<TabLabel htmlFor={item.category}>{item.category}</TabLabel>
						</React.Fragment>
					))}
				</Tabs>

				{products.map((product, productIndex) => (
					<React.Fragment key={`product-${productIndex}`}>
						{product.brands.map((brand) => (
							<ProductList
								key={brand.name}
								brand={brand.name}
								itemBg={productIndex % 2 ? '#ABC3CE' : '#ceb5ab'}
								items={brand.products}
								display={product.category === tab ? 1 : 0}
							/>
						))}
					</React.Fragment>
				))}
			</Container>

			<Link to="/barcode">
				<FaPlus size={32} />
			</Link>
		</main>
	);
}
