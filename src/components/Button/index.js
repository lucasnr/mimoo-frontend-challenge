import styled from 'styled-components';

import { colorPrimary } from '../../styles/colors';

const Button = styled.button`
  align-items: center;
  background-color: ${colorPrimary};
  border: none;
  color: #fff;
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  height: 3.125rem;
  justify-content: center;
  width: 100%;
`;

export default Button;
