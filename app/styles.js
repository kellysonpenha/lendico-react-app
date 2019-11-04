import styled, { createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#3D5AFE',
  dark: '#32325D',
  light: '#F8F9Fe',
  white: '#FFFFFF',
};

const shadow = {
  sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
  md: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');

  *{
    box-sizing: border-box;
    paddin: 0px;
    margin: 0px;
    font-family: 'Comfortaa', cursive;
  }
  body {
    background-color: ${colors.light}
  }
`;

export const Content = styled.div`
  padding: 0rem 1rem;
`;

export const H1 = styled.h1`
  color: ${colors.primary};
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: .5rem;
`;

export const H2 = styled.h2`
  color: ${colors.primary};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: .5rem;
`;

export const Text = styled.p`
  color: ${colors.dark};
  font-size: .8rem;
  text-align: center;
  margin-bottom: .5rem;
  line-height: 1.8;
`;

export const Input = styled.input`
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 6px;
  width: 100%;
  outline: none;
  box-shadow: ${shadow.sm};
`;

export const Button = styled.button`
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 6px;
  outline: none;
  color: ${(props) => (props.color === 'light' ? colors.primary : colors.white)};
  background-color: ${(props) => (props.color === 'light' ? colors.white : colors.primary)};
  :disabled {
    opacity: 0.7;
  }
`;

export const ButtonIcon = styled(Button)`
  .button__text{
    margin-right: 5px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: .5rem;
  position: relative;
  display: flex;

  input{
    paddin-right: 105px;
  }
  button{
    position: absolute;
    right: 0px;
    top: 0px;
  }
`;

export const Card = styled.div`
  padding: 1.2rem;
  border-radius: 6px;
  box-shadow: ${shadow.sm};
  background-color: ${colors.white};
`;
