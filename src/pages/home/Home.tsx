import Header from '../../components/header/Header';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import { HeroContent, HeroSection, Title, CallToAction } from './styleHome';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection>
        <HeroContent>
          <Title>
            <h1>Swamps on walls for healthier cities</h1>
            <span>
              We reintroduce wetland ecosystems into facades to filter water,
              reduce urban heat, and bring biodiversity back to buildings — in a
              beautiful, efficient, and affordable way.
            </span>
          </Title>
          <CallToAction>
            <PrimaryButton text="Talk to Muuras" link="/contact-us" />
            <span>How it works?</span>
          </CallToAction>
        </HeroContent>
      </HeroSection>
    </div>
  );
}
