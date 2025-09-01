import styled from 'styled-components';
import { Text } from '../../utils/colors';

export const HeroSection = styled.div`
  background-image: url('/HeroStaticBackground.png');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 180px;

  h1 {
    color: ${Text.white};
    font-size: 110px;
    margin: 0;
    font-weight: 500;
    line-height: 120%;
  }
  span {
    color: ${Text.white};
    font-size: 24px;
    line-height: 130%;
    margin: 0;
  }
`;

export const HeroContent = styled.div`
  width: 60%;
  height: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  align-items: center;
`;

export const CallToAction = styled.div`
  column-gap: 2rem;
  display: flex;
  align-items: center;
  button {
  }
`;
