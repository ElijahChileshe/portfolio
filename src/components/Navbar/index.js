import React from 'react';
import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {DiCssdeck} from "react-icons/di";
import { useTheme } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Bio } from '../../data/constants';
import logo from '../../../src/Images/logo.png';

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;


const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`

const MobileLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;




const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
 

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
        <NavContainer>
            <NavLogo to='/'>
              <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
              
            </NavLogo>
            <MobileIcon>
                {isOpen ? <FaTimes onClick={toggle} /> : <FaBars onClick={toggle} />}
            </MobileIcon>
            <NavItems>
            <NavLink to='/' onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to='/blogs' onClick={closeMobileMenu}>Blogs</NavLink>
            <NavLink to='/publications' onClick={closeMobileMenu}>Publications</NavLink>
            </NavItems>
            <ButtonContainer>
                <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
            </ButtonContainer>

                {
            isOpen &&
            <MobileMenu isOpen={isOpen}>
                {/* <MobileLink to='#about' onClick={() => {
                setIsOpen(!isOpen)
                }}>About</MobileLink>
                <MobileLink to='#skills' onClick={() => {
                setIsOpen(!isOpen)
                }}>Skills</MobileLink>
                <MobileLink to='#experience' onClick={() => {
                setIsOpen(!isOpen)
                }}>Experience</MobileLink>
                <MobileLink to='#projects' onClick={() => {
                setIsOpen(!isOpen)
                }}>Projects</MobileLink> */}
                <MobileLink to='/publications' onClick={() => {
                setIsOpen(!isOpen)
                }}>Publications</MobileLink>
                <MobileLink to='/blogs' onClick={() => {
                setIsOpen(!isOpen)
                }}>Blogs</MobileLink>
                {/* <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GithubButton> */}
            </MobileMenu>
                }
        </NavContainer>
    </Nav>
  )
}

export default Navbar