import PrimaryButton from '../primaryButton/primaryButton';
import { HeaderContainer, Nav } from './styleHeader';

export default function Header() {
  return (
    <HeaderContainer>
      <img src="../public/logo.svg" alt="Logo" />
      <Nav>
        <span>Home</span>
        <span>Q&A</span>
        <select>
          <option value="" disabled selected hidden>
            Services
          </option>
          <option value="products">Products</option>
          <option value="services">Services</option>
          <option value="about">About Us</option>
        </select>
      </Nav>
      <PrimaryButton text="Contact us" link="/contact-us" />
    </HeaderContainer>
  );
}
