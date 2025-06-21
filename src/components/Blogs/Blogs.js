import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import ejayImg from '../../Images/DSA 1.jpg';

const BlogContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
`;

const BlogWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgLight};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const BlogPost = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
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
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  height: 250px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.primary};
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

  strong {
    color: ${({ theme }) => theme.text_primary};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Blogs = () => {
  const theme = useTheme();

  const blogPosts = [
    {
      title: "Data Science Africa 2025 Experience",
      date: "June 2025",
      content: "Data Science Africa 2025 was a transformative experience that brought together brilliant minds from across Africa and beyond. As a participant, I had the privilege of engaging with cutting-edge research, innovative solutions, and passionate individuals dedicated to advancing data science on the continent."
    },
    {
      title: "Zambia Cybertech Conference 2024 - 2nd Place Winner",
      date: "September 25-26, 2024",
      content: "I won 2nd place in the pitching contest at the Zambia Cybertech Conference, held in Zambia from September 25th to 26th September, 2024, with my pitch titled 'Exploring AI-Driven Innovations for Accelerating Radiology Reporting in Zambia'."
    },
    {
      title: "Electronic Theses and Disseratoins 2024 Conference Presentations",
      date: "2024",
      content: "Presented full paper titled 'A Pre-Processing Pipeline for Improved ETD Metadata Quality in Downstream Services' and poster titled 'Design and Implementation of an Interoperable Zambia National Electronic Thesis and Dissertation Portal' at the 27th International Symposium on Electronic Theses and Dissertations (ETD 2024) in Livingstone, Zambia."
    },
    {
      title: "Presentation at Pan African Conference on Science, Computing and Telecommunications (PACT 2023)",
      date: "2023",
      content: "Presented student abstract paper Large Scale Analysis of Medical Image Metadata at the Pan African Conference on Science, Computing and Telecommunications (PACT 2023) held in Lusaka, Zambia"
    }
  ];

  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogHeader>My Blog Posts</BlogHeader>
        <BlogContent>
          {blogPosts.map((post, index) => (
            <BlogPost key={index} index={index}>
              <div>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogDate>{post.date}</BlogDate>
                <BlogText>
                  {post.content}
                </BlogText>
              </div>
            </BlogPost>
          ))}
        </BlogContent>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blogs;
