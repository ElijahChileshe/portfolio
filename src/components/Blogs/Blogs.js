import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import ejayImg from '../../Images/DSA 1.jpg';

const BlogContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text_primary};
`;

const BlogHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const BlogPost = styled.div`
  background: ${({ theme }) => theme.card_light};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  gap: 2rem;

  &:hover {
    transform: translateY(-3px);
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const BlogDate = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const BlogImage = styled.div`
  width: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  height: 250px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BlogText = styled.div`
  flex: 1;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
`;

const Blogs = () => {
  const theme = useTheme();

  return (
    <BlogContainer>
      <BlogHeader>My Blog Posts</BlogHeader>
      
      <BlogContent>
        <BlogPost>
          <BlogImage>
            <ImageContainer>
              {/* Main image for Data Science Africa 2025 */}
              <img src={ejayImg} alt="Profile" />
            </ImageContainer>
          </BlogImage>
          <div>
            <BlogTitle>Data Science Africa 2025 Experience</BlogTitle>
            <BlogDate>June 2025</BlogDate>
            <BlogText>
              <strong>Introduction:</strong>
              <br />
              Data Science Africa 2025 was a transformative experience that brought together brilliant minds from across Africa and beyond. As a participant, I had the privilege of engaging with cutting-edge research, innovative solutions, and passionate individuals dedicated to advancing data science on the continent.
              <br /><br />
              <strong>Key Takeaways:</strong>
              <br />
              - The importance of data science in solving real-world problems
              - Collaborative approaches to research and development
              - Opportunities for growth and innovation in African data science
              <br /><br />
              <strong>Future Implications:</strong>
              <br />
              This experience has inspired me to continue pursuing excellence in data science and contribute to the growth of the field in Africa. I am excited about the potential for future collaborations and the impact we can make together.
            </BlogText>
          </div>
        </BlogPost>

        <BlogPost>
          <BlogImage>
            <ImageContainer>
              {/* Cybertech Conference Image */}
              <p>Add Conference Image</p>
            </ImageContainer>
          </BlogImage>
          <div>
            <BlogTitle>Zambia Cybertech Conference 2024 - 2nd Place Winner</BlogTitle>
            <BlogDate>September 2024</BlogDate>
            <BlogText>
              <strong>Winning Pitch:</strong>
              <br />
              I am thrilled to announce that I secured the 2nd place in the pitching contest at the Zambia Cybertech Conference 2024, held from September 25th to 26th. My pitch, titled "Exploring AI-Driven Innovations for Accelerating Radiology Reporting in Zambia," was recognized for its potential to revolutionize medical diagnostics in our country.
              <br /><br />
              <strong>Project Overview:</strong>
              <br />
              The project aims to leverage artificial intelligence to streamline radiology reporting processes in Zambia's healthcare system. By implementing AI-driven solutions, we can significantly reduce diagnostic turnaround times and improve patient care outcomes.
              <br /><br />
              <strong>Impact:</strong>
              <br />
              - Accelerated diagnosis turnaround times
              - Improved accuracy in medical imaging analysis
              - Enhanced patient care through faster treatment decisions
              - Potential for nationwide implementation in healthcare facilities
            </BlogText>
          </div>
        </BlogPost>

        <BlogPost>
          <BlogImage>
            <ImageContainer>
              {/* Placeholder for PACT 2023 image */}
              <p>Add PACT 2023 Image</p>
            </ImageContainer>
          </BlogImage>
          <div>
            <BlogTitle>PACT 2023 Presentation - Medical Image Metadata Analysis</BlogTitle>
            <BlogDate>2023</BlogDate>
            <BlogText>
              <strong>Conference Overview:</strong>
              <br />
              I had the honor of presenting my research paper titled "Large Scale Analysis of Medical Image Metadata" at the Pan African Conference on Science, Computing and Telecommunications (PACT 2023) held in Lusaka, Zambia.
              <br /><br />
              <strong>Research Focus:</strong>
              <br />
              The study delves into the systematic analysis of medical image metadata, exploring patterns, trends, and potential implications for healthcare informatics. The research highlights the importance of metadata in optimizing medical imaging workflows and improving patient data management.
              <br /><br />
              <strong>Key Findings:</strong>
              <br />
              - Comprehensive analysis of medical image metadata structures
              - Identification of metadata patterns across different imaging modalities
              - Insights into metadata utilization in healthcare systems
              - Recommendations for standardized metadata implementation
              <br /><br />
              <strong>Read the Full Paper:</strong>
              <br />
              <a href="#" style={{ color: `${theme.primary}`, textDecoration: 'underline' }}>View Published Paper</a>
            </BlogText>
          </div>
        </BlogPost>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blogs;
