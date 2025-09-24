"use client";

import styled from "styled-components";
import { media } from "@/utils/media";
import { LinkHandler } from "../LinkHandler/LinkHandler";
import { CONFIG } from "@/config-global";
import Button from "../ui/atoms/button";
import { ArrowLeft } from "lucide-react";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
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

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

const SectionContent = styled.div`
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

const DocsPage = () => {
  return (
    <PageContainer>
      <PageTitle>
        <LinkHandler isExternal elHref={CONFIG.router.home}>
          <Button size="md" variant="outline">
            <ArrowLeft />
          </Button>
        </LinkHandler>
        Getting Started
      </PageTitle>
      <PageSubtitle>
        Welcome to HeimLab documentation. Learn how to get started with our
        powerful tools and features.
      </PageSubtitle>

      <Section>
        <SectionTitle>Quick Start</SectionTitle>
        <SectionContent>
          <p>
            Get up and running with HeimLab in just a few minutes. Our platform
            is designed to be intuitive and powerful.
          </p>
          <p>Start by installing the necessary dependencies:</p>
          <pre>
            <code>npm install heimlab</code>
          </pre>
          <p>Then import and use the components in your React application:</p>
          <pre>
            <code>{`import { HeimLab } from 'heimlab';

function App() {
  return (
    <HeimLab>
      <YourContent />
    </HeimLab>
  );
}`}</code>
          </pre>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Features</SectionTitle>
        <SectionContent>
          <p>
            HeimLab provides a comprehensive set of tools for modern web
            development:
          </p>
          <ul>
            <li>Advanced parallax effects</li>
            <li>Responsive design utilities</li>
            <li>Performance optimizations</li>
            <li>TypeScript support</li>
            <li>Customizable themes</li>
          </ul>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Next Steps</SectionTitle>
        <SectionContent>
          <p>
            Ready to dive deeper? Check out our installation guide, explore the
            API reference, or browse through our examples to see HeimLab in
            action.
          </p>
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default DocsPage;
