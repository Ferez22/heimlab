"use client";

import { useState } from "react";
import styled from "styled-components";
import { media } from "@/utils/media";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
`;

const SideNav = styled.aside<{ $isOpen: boolean }>`
  width: 280px;
  background: var(--background);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 100;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  ${media.tablet} {
    position: relative;
    transform: translateX(0);
    flex-shrink: 0;
  }
`;

const SideNavHeader = styled.div`
  padding: 0 2rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
`;

const SideNavTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--foreground);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  display: block;
  padding: 0.75rem 2rem;
  color: ${(props) =>
    props.$isActive ? "var(--foreground)" : "rgba(255, 255, 255, 0.7)"};
  text-decoration: none;
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  border-left: 3px solid
    ${(props) => (props.$isActive ? "var(--foreground)" : "transparent")};
  transition: all 0.2s ease;

  &:hover {
    color: var(--foreground);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: 0;
  min-height: 100vh;

  ${media.tablet} {
    margin-left: 280px;
  }
`;

const MobileMenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 101;
  background: var(--background);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--foreground);
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: block;

  ${media.tablet} {
    display: none;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  ${media.tablet} {
    display: none;
  }
`;

interface DocsLayoutProps {
  children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <LayoutContainer>
      <MobileMenuButton onClick={toggleSideNav}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </MobileMenuButton>

      <Overlay $isOpen={isSideNavOpen} onClick={closeSideNav} />

      <SideNav $isOpen={isSideNavOpen}>
        <SideNavHeader>
          <SideNavTitle>Documentation</SideNavTitle>
        </SideNavHeader>

        <nav>
          <NavList>
            <NavItem>
              <NavLink href="/docs" $isActive>
                Getting Started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/docs/installation">Installation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/docs/configuration">Configuration</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/docs/api">API Reference</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/docs/examples">Examples</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/docs/troubleshooting">Troubleshooting</NavLink>
            </NavItem>
          </NavList>
        </nav>
      </SideNav>

      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default DocsLayout;
