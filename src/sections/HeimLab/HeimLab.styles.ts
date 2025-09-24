import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BaseText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Arial", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  user-select: none;
  pointer-events: none;
`;

export const MainText = styled(BaseText)`
  font-size: 8rem;
  color: #1e40af;
  z-index: 10;
  text-shadow: 0 0 20px rgba(30, 64, 175, 0.3);

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const SecondaryText = styled(BaseText)`
  font-size: 7.5rem;
  color: #3b82f6;
  z-index: 9;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ThirdText = styled(BaseText)`
  font-size: 7rem;
  color: #60a5fa;
  z-index: 8;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FourthText = styled(BaseText)`
  font-size: 6.5rem;
  color: #93c5fd;
  z-index: 7;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FifthText = styled(BaseText)`
  font-size: 6rem;
  color: #bfdbfe;
  z-index: 6;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const SixthText = styled(BaseText)`
  font-size: 5.5rem;
  color: #dbeafe;
  z-index: 5;
  opacity: 0.4;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SeventhText = styled(BaseText)`
  font-size: 5rem;
  color: #eff6ff;
  z-index: 4;
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const EighthText = styled(BaseText)`
  font-size: 4.5rem;
  color: #f8fafc;
  z-index: 3;
  opacity: 0.2;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const NinthText = styled(BaseText)`
  font-size: 4rem;
  color: #ffffff;
  z-index: 2;
  opacity: 0.1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
`;
