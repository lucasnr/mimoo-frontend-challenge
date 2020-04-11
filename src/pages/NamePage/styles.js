import styled from 'styled-components';

import WidthContainer from '../../components/WidthContainer';
import { colorPrimary } from '../../styles/colors';

export const Container = styled(WidthContainer)`
	padding: 2rem 2.5rem;
	padding-bottom: 0px;
`;

export const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
	margin-top: 3.75rem;
`;

export const Form = styled.form`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
`;

export const InputContainer = styled.div`
	margin-bottom: 1rem;
	padding-left: 2.5rem;
	padding-right: 2.5rem;
`;

export const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${colorPrimary};
	display: block;
	font-size: 1.375rem;
	padding: 0.5rem 0px;
	margin: auto;
	max-width: 20.875rem;
	width: 100%;
`;
