import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { whiteTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './components/Footer';
import Blogs from './components/Blogs/Blogs';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(135, 206, 250, 0.15) 0%, rgba(135, 206, 250, 0) 50%), 
            linear-gradient(141.27deg, rgba(70, 130, 180, 0) 50%, rgba(70, 130, 180, 0.15) 100%);

  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/blogs" element={
            <Blogs />
          } />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
