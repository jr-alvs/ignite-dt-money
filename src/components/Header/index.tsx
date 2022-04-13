import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HaederProps {
  onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: HaederProps) => {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type='button' onClick={onOpenModal}> 
          Nova transação 
        </button>
      </Content>
    </Container>
  );
}