import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../data/constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Container = styled(motion.div)`
  width: 100%;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const Desc = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  max-width: 800px;
  margin: 1.5rem auto 2rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem auto;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text_primary};
  font-size: 0.9rem;
  border-radius: 12px;
  font-weight: 500;
  margin: 2rem 0;
  padding: 0.5rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    flex-wrap: wrap;
  }
`;

export const ToggleButton = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.text_primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem;
  }
`;

export const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.border};
  height: 1.2rem;
  margin: 0 0.5rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Container ref={ref}>
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </Title>
        <Desc
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Here are some of my recent projects that showcase my skills and expertise
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            value="all"
            onClick={() => setToggle('all')}
            active={toggle === 'all'}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            value="web app"
            onClick={() => setToggle('web app')}
            active={toggle === 'web app'}
          >
            Web Apps
          </ToggleButton>
          <Divider />
          <ToggleButton
            value="android app"
            onClick={() => setToggle('android app')}
            active={toggle === 'android app'}
          >
            Android Apps
          </ToggleButton>
          <Divider />
          <ToggleButton
            value="machine learning"
            onClick={() => setToggle('machine learning')}
            active={toggle === 'machine learning'}
          >
            Machine Learning
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {toggle === 'all' ? (
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            ))
          ) : (
            projects
              .filter((item) => item.category === toggle)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;