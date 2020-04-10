import React, { useCallback, useState, useEffect } from 'react';
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
	Error,
	Loading,
} from './styles';

import { colorPrimary } from '../../styles/colors';

export default function BarcodePage() {
	const [scanned, setScanned] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const handleDetected = useCallback((result) => {
		setScanned(result.codeResult.code);
	}, []);

	const history = useHistory();
	const handleClick = useCallback(() => {
		history.push('/identified-product');
	}, [history]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<Container>
			<Header>
				<Link to="/products">
					<FaArrowLeft color={colorPrimary} size={24} />
				</Link>

				<Title>Escanear Produto</Title>
			</Header>

			{error ? (
				<Error>
					Ocorreu um erro ao acessar a câmera do seu dispositivo.
					<small>
						Certifique-se de que você deu permissão e de que sua câmera está
						funcionando corretamente.
					</small>
				</Error>
			) : (
				<>
					{loading && <Loading>Carregando</Loading>}

					<ScannerContainer>
						<Scanner
							onDetected={handleDetected}
							onError={() => setError(true)}
						/>
						<ScannerContent>
							<ScannerHeader>Escaneando o código de barras</ScannerHeader>
							<ScannerSides />
							<ScannerFooter />
						</ScannerContent>
					</ScannerContainer>

					<ScannedLabel>Número do código de barras:</ScannedLabel>
					<ScannedCode>{scanned || '000000000000000'}</ScannedCode>

					<Button onClick={handleClick} variant>
						Confirmar
					</Button>
				</>
			)}
		</Container>
	);
}
