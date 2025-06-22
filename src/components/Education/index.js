import React from 'react';
import styled from 'styled-components';
import { education } from '../../data/constants';
import TimeLine from '@mui/lab/Timeline';
import TimeLineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../../Cards/ExperienceCard';
import EducationCard from '../../Cards/EducationCard';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 4rem 2rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

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

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;


const Experience = () => {
  return (
    <Container id='education'
    initial={{ opacity: 0, y: 1 }} // Initial animation state
        animate={{ opacity: 50, y: 0 }} // Animation state when component enters the viewport
        transition={{ duration: 3, ease: 'easeIn' }} //
>
        <Wrapper>
            <Title>Education</Title>
            <Desc>My education details are as follows...</Desc>
            <TimeLineSection>
                <TimeLine>
                    {education.map((education, index) => (
                        <TimeLineItem>
                            <TimelineContent  sx={{ py: '12px', px: 2 }}>
                              <EducationCard education={education}/>
                            </TimelineContent>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' color='secondary'/>
                                {index !== education.length -1 && (
                                <TimelineConnector /> )}
                            </TimelineSeparator>
                        </TimeLineItem>
                    ))}
                </TimeLine>
            </TimeLineSection>
        </Wrapper>
    </Container>
  )
}

export default Experience