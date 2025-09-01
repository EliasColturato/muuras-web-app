import styled from 'styled-components';
import { Primary, Text } from '../../utils/colors';

export const HeaderContainer = styled.header`
  width: auto;
  height: 80px;
  background-color: ${Primary['primary-900']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 180px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h1 {
    color: ${Text.white};
  }
`;

export const Logo = styled.img`
  img {
    width: 10px;
    height: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 5rem;
  color: ${Text.white};

  select {
    background-color: ${Primary['primary-900']};
    color: ${Text.white};
    border: none;
    font-size: 16px;
  }
`;
