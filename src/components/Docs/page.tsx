"use client";
import { LinkHandler } from "../LinkHandler/LinkHandler";
import { CONFIG } from "@/config-global";
import Button from "../ui/atoms/button";
import { ArrowLeft } from "lucide-react";
import * as S from "./page.styles";
import { LinkPreview } from "../ui/link-preview";

const DocsPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>
        <LinkHandler isExternal elHref={CONFIG.router.home}>
          <Button size="md" variant="outline">
            <ArrowLeft />
          </Button>
        </LinkHandler>
        Getting Started
      </S.PageTitle>
      <S.PageSubtitle>
        Welcome to HeimLab documentation. Learn how to get started setting up
        your own infrastructure with HeimLab.
      </S.PageSubtitle>

      <S.Section>
        <S.SectionTitle>Quick Start</S.SectionTitle>
        <S.SectionContent>
          <p>
            Get up and running with HeimLab in just a few minutes. For that,
            Make sure you have <b>Docker</b> installed and running.
          </p>
          <p>
            once you have it, download the{" "}
            <a className="underline" href={CONFIG.router.dockerCompose}>
              <b>docker compose</b>
            </a>{" "}
            file and run it:
          </p>
          <pre>
            <code>docker compose up</code>
          </pre>
          <p>That&apos;s it, you are set up and ready to go!</p>
        </S.SectionContent>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Openly accessible, securely</S.SectionTitle>
        <S.SectionContent>
          <div>
            For this, you will need to setup a reverse proxy. You can use{" "}
            <LinkPreview
              url="https://cloudflare.com/"
              className="font-bold text-white text-lg"
            >
              Cloudflare tunnels
            </LinkPreview>{" "}
            for this.
          </div>

          <p>That&apos;s it, you are set up and ready to go!</p>
        </S.SectionContent>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Features</S.SectionTitle>
        <S.SectionContent>
          <p>
            HeimLab provides a comprehensive infrastructure for your projects.
            Here are some of the features:
          </p>
          <ul>
            <li>Advanced parallax effects</li>
            <li>Responsive design utilities</li>
            <li>Performance optimizations</li>
            <li>TypeScript support</li>
            <li>Customizable themes</li>
          </ul>
        </S.SectionContent>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Next Steps</S.SectionTitle>
        <S.SectionContent>
          <p>
            Ready to dive deeper? Check out our installation guide, explore the
            API reference, or browse through our examples to see HeimLab in
            action.
          </p>
        </S.SectionContent>
      </S.Section>
    </S.PageContainer>
  );
};

export default DocsPage;
