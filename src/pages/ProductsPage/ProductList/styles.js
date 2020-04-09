import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1.25rem;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  margin-bottom: 0.75rem;
`;

export const Brand = styled.h4`
  color: #949494;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.25rem;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const Item = styled.li`
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0.25rem rgba(0, 0, 0, 0.31);
  background-color: ${(props) => props.itemBg};
  height: 10rem;
`;
