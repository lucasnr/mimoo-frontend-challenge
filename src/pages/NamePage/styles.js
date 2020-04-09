import styled from 'styled-components';

import { colorPrimary } from '../../styles/colors';

export const Container = styled.section`
  flex: 1;
  padding: 2rem 2.5rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 3.75rem;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colorPrimary};
  font-size: 1.375rem;
  padding: 0.5rem 0px;
  width: 100%;
`;
