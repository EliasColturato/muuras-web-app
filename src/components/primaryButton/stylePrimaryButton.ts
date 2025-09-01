import styled from 'styled-components';
import { Primary, Text } from '../../utils/colors';

export const WrapperPrimaryButton = styled.div`
  button {
    background-color: ${Primary['primary-500']};
    color: ${Text.white};
    border: none;
    padding: 16px 16px;
    border-radius: 999px;
    transition: transform 0.2s ease;
  }
  button:hover {
    transform: scale(1.1);
  }
`;
