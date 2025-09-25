import styled from "styled-components";

import { media } from "@/utils/media";

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: var(--background);
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.tablet} {
    font-size: 3rem;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

export const SectionContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 1rem;

  p {
    margin-bottom: 1rem;
  }

  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
  }

  pre {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background: none;
      padding: 0;
    }
  }
`;
