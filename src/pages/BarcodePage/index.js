import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Button from '../../components/Button';
import Scanner from './Scanner';
import {
	Container,
	Header,
	Title,
	ScannerContainer,
	ScannerContent,
	ScannerHeader,
	ScannerSides,
	ScannerFooter,
	ScannedLabel,
	ScannedCode,
} from './styles';

import { colorPrimary } from '../../styles/colors';

export default function BarcodePage() {
	const [scanned, setScanned] = useState();

	const handleDetected = useCallback((result) => {
		setScanned(result.codeResult.code);
	}, []);

	const history = useHistory();
	const handleClick = useCallback(() => {
		history.push('/identified-product');
	}, [history]);

	return (
		<Container>
			<Header>
				<Link to="/products">
					<FaArrowLeft color={colorPrimary} size={24} />
				</Link>

				<Title>Escanear Produto</Title>
			</Header>

			<ScannerContainer>
				<Scanner onDetected={handleDetected} />
				<ScannerContent>
					<ScannerHeader>Escaneando o código de barras</ScannerHeader>
					<ScannerSides />
					<ScannerFooter></ScannerFooter>
				</ScannerContent>
			</ScannerContainer>

			<ScannedLabel>Número do código de barras:</ScannedLabel>
			<ScannedCode>{scanned || '000000000000000'}</ScannedCode>

			<Button onClick={handleClick} variant>
				Confirmar
			</Button>
		</Container>
	);
}
