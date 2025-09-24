import React from "react";
import styled, { css } from "styled-components";
import { media } from "@/utils/media";

type ButtonVariant = "primary" | "secondary" | "subtle" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return css`
        background: var(--foreground);
        color: var(--background);
        border: 1px solid var(--foreground);

        &:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.9);
          color: var(--background);
        }

        &:active:not(:disabled) {
          background: rgba(255, 255, 255, 0.8);
        }
      `;

    case "secondary":
      return css`
        background: rgba(255, 255, 255, 0.1);
        color: var(--foreground);
        border: 1px solid rgba(255, 255, 255, 0.2);

        &:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        &:active:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
        }
      `;

    case "subtle":
      return css`
        background: transparent;
        color: var(--foreground);
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.05);
        }

        &:active:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
        }
      `;

    case "danger":
      return css`
        background: #dc2626;
        color: white;
        border: 1px solid #dc2626;

        &:hover:not(:disabled) {
          background: #b91c1c;
          border-color: #b91c1c;
        }

        &:active:not(:disabled) {
          background: #991b1b;
        }
      `;

    case "outline":
      return css`
        background: transparent;
        color: var(--foreground);
        border: 1px solid var(--foreground);

        &:hover:not(:disabled) {
          background: var(--foreground);
          color: var(--background);
        }

        &:active:not(:disabled) {
          background: rgba(255, 255, 255, 0.9);
        }
      `;

    default:
      return css`
        background: var(--foreground);
        color: var(--background);
        border: 1px solid var(--foreground);
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        height: 2rem;
        min-width: 2rem;

        ${media.tablet} {
          padding: 0.5rem 1.25rem;
          font-size: 0.9rem;
        }
      `;

    case "md":
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        height: 2.5rem;
        min-width: 2.5rem;

        ${media.tablet} {
          padding: 0.875rem 1.75rem;
          font-size: 1.1rem;
        }
      `;

    case "lg":
      return css`
        padding: 1rem 2rem;
        font-size: 1.125rem;
        height: 3rem;
        min-width: 3rem;

        ${media.tablet} {
          padding: 1.125rem 2.25rem;
          font-size: 1.25rem;
        }
      `;

    default:
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        height: 2.5rem;
        min-width: 2.5rem;
      `;
  }
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $loading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;
  white-space: nowrap;
  user-select: none;

  ${(props) => getVariantStyles(props.$variant)}
  ${(props) => getSizeStyles(props.$size)}

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.$loading &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid var(--foreground);
    outline-offset: 2px;
  }

  /* Loading spinner */
  &::before {
    content: "";
    display: ${(props) => (props.$loading ? "inline-block" : "none")};
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 0.5rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  children,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
export type { ButtonProps, ButtonVariant, ButtonSize };
