import Container from '@mui/material/Container';
import styled from 'styled-components';
// import Image from '../../images/background/brussels-gf7e1e87eb_1920.jpg';

export const MainContainer = ({ children }) => {
  return (
    <ContainerStyled
      >
          
      {children}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
background-image: url('../images/background/brussels-gf7e1e87eb_1920.jpg');
background-size: cover;
`
