import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: unset;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2rem;
      text-align: none;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

  } 
`;
// The last '}' is for the a {.... 