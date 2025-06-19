import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import HeroImg from '../../Images/ejay-min.jpg'
import HeroBgAnimation from '../../HeroBgAnimation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


const HeroContainer = styled(motion.div)`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  @media (max-width: 640px) {
    padding: 60px 16px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(204, 0, 187, 0.05) 0%, rgba(201, 32, 184, 0.05) 100%);
    z-index: 0;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 4rem;
  
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;
const HeroLeftContainer = styled(motion.div)`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
  }
`;

const HeroRightContainer = styled(motion.div)`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;



const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow:  20px 20px 60px #1F2634,
  -20px -20px 60px #1F2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
  }    
    
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  } 
`;

const Img = styled.img`
  position: relative;
  width: 70%;
  height: 40%;
  max-width: 450px;
  max-height: 440px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: transform 0.5s ease-in-out; /* Add a smooth transition */

  &:hover {
    transform: scale(1.3); /* Increase the size on hover */
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      <HeroContainer
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <HeroLeftContainer
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
              style={{ color: 'var(--primary-color)', fontSize: '4rem', fontWeight: 700 }}
            >
              {Bio.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
              style={{ fontSize: '2rem', marginBottom: '1rem' }}
            >
              {Bio.role}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
              style={{ fontSize: '1.2rem', lineHeight: '1.6' }}
            >
              <Typewriter
                options={{
                  strings: Bio.roleDescription,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  delay: 50
                }}
              />
            </motion.h3>
          </HeroLeftContainer>
          <HeroRightContainer
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <motion.img
              src={HeroImg}
              alt="Hero"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              style={{ 
                borderRadius: '12px', 
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                width: '400px',
                height: 'auto'
              }}
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;