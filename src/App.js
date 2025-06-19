import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
`

const Wrapper = styled(motion.div)`
  background: linear-gradient(135deg, rgba(204, 0, 187, 0.05) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(45deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.05) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
    backdrop-filter: blur(10px);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-top: 2rem;
  }
`
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
          <Body>
            <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects />
              <Wrapper>
                <Education />
              </Wrapper>
              <Footer />
          </Body>
      </Router>

    </ThemeProvider>
  );
}

export default App;
