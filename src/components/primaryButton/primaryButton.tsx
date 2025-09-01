import { Link } from 'react-router-dom';
import { WrapperPrimaryButton } from './stylePrimaryButton';

interface PrimaryButtonProps {
  text: string;
  link: string;
}

export default function PrimaryButton({ text, link }: PrimaryButtonProps) {
  return (
    <WrapperPrimaryButton>
      <Link to={link}>
        <button>{text}</button>
      </Link>
    </WrapperPrimaryButton>
  );
}
