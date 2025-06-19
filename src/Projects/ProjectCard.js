import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px -2px ${({ theme }) => theme.shadow};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text_primary};
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ProjectCard = ({ project, openModal, setOpenModal }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        setOpenModal(true);
        openModal(project);
      }}
    >
      <Title>{project.name}</Title>
      <Description>{project.description}</Description>
      <TechTags>
        {project.technologies.map((tech, index) => (
          <Tag key={index}>{tech}</Tag>
        ))}
      </TechTags>
      <Links>
        {project.github && (
          <LinkIcon
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, '_blank');
            }}
          >
            <FaGithub size={20} />
          </LinkIcon>
        )}
        {project.demo && (
          <LinkIcon
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.demo, '_blank');
            }}
          >
            <FaExternalLinkAlt size={20} />
          </LinkIcon>
        )}
      </Links>
    </Card>
  );
};

export default ProjectCard;
