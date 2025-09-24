import React from "react";
import { MouseParallax } from "react-just-parallax";
import * as S from "./HeimLab.styles";

interface Props {
  scrollContainer: React.MutableRefObject<HTMLDivElement | null>;
}

const defStrength = 0.24;
const mul1 = 0.84;
const mul2 = 0.82;
const mul7 = 0.46;
const mul8 = 0.91;
const mul9 = 0.91;

export const HeimLab = ({ scrollContainer }: Props) => {
  return (
    <>
      <S.Wrapper>
        <S.TextContainer>
          {/* Main HeimLab text with different parallax strengths */}
          <MouseParallax
            isAbsolutelyPositioned
            scrollContainerRef={scrollContainer}
            strength={defStrength * mul1}
            shouldPause={false}
            enableOnTouchDevice={true}
            zIndex={10}
          >
            <S.MainText>HeimLab</S.MainText>
          </MouseParallax>

          {/* Secondary text layer */}
          <MouseParallax
            isAbsolutelyPositioned
            scrollContainerRef={scrollContainer}
            strength={defStrength * mul2}
            shouldPause={false}
            enableOnTouchDevice={true}
            zIndex={9}
          >
            <S.SecondaryText>HeimLab</S.SecondaryText>
          </MouseParallax>

          {/* Seventh text layer */}
          <MouseParallax
            isAbsolutelyPositioned
            scrollContainerRef={scrollContainer}
            strength={defStrength * mul7}
            shouldPause={false}
            enableOnTouchDevice={true}
            zIndex={4}
          >
            <S.SeventhText>HeimLab</S.SeventhText>
          </MouseParallax>

          {/* Eighth text layer */}
          <MouseParallax
            isAbsolutelyPositioned
            scrollContainerRef={scrollContainer}
            strength={defStrength * mul8}
            shouldPause={false}
            enableOnTouchDevice={true}
            zIndex={3}
          >
            <S.EighthText>HeimLab</S.EighthText>
          </MouseParallax>

          {/* Ninth text layer */}
          <MouseParallax
            isAbsolutelyPositioned
            scrollContainerRef={scrollContainer}
            strength={defStrength * mul9}
            shouldPause={false}
            enableOnTouchDevice={true}
            zIndex={2}
          >
            <S.NinthText>HeimLab</S.NinthText>
          </MouseParallax>
        </S.TextContainer>
      </S.Wrapper>
    </>
  );
};
