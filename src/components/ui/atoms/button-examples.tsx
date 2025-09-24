import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: var(--foreground);
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: start;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Label = styled.span`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const ButtonExamples: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <ExamplesContainer>
      <Section>
        <SectionTitle>Button Variants</SectionTitle>
        <ButtonGrid>
          <ButtonGroup>
            <Label>Primary</Label>
            <Button variant="primary">Primary Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Label>Secondary</Label>
            <Button variant="secondary">Secondary Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Label>Subtle</Label>
            <Button variant="subtle">Subtle Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Label>Danger</Label>
            <Button variant="danger">Danger Button</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Label>Outline</Label>
            <Button variant="outline">Outline Button</Button>
          </ButtonGroup>
        </ButtonGrid>
      </Section>

      <Section>
        <SectionTitle>Button Sizes</SectionTitle>
        <ButtonGroup>
          <Button size="sm" variant="primary">
            Small Button
          </Button>
          <Button size="md" variant="primary">
            Medium Button
          </Button>
          <Button size="lg" variant="primary">
            Large Button
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Button States</SectionTitle>
        <ButtonGroup>
          <Button variant="primary">Normal</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button
            variant="primary"
            loading={loading}
            onClick={handleLoadingDemo}
          >
            {loading ? "Loading..." : "Click for Loading"}
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Full Width</SectionTitle>
        <Button variant="primary" fullWidth>
          Full Width Button
        </Button>
      </Section>

      <Section>
        <SectionTitle>All Variants with Different Sizes</SectionTitle>
        <ButtonGrid>
          {(
            ["primary", "secondary", "subtle", "danger", "outline"] as const
          ).map((variant) => (
            <ButtonGroup key={variant}>
              <Label>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Label>
              <Button variant={variant} size="sm">
                Small
              </Button>
              <Button variant={variant} size="md">
                Medium
              </Button>
              <Button variant={variant} size="lg">
                Large
              </Button>
            </ButtonGroup>
          ))}
        </ButtonGrid>
      </Section>
    </ExamplesContainer>
  );
};

export default ButtonExamples;
