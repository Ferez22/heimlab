import React from "react";

import { LinkHandler } from "@/components/LinkHandler/LinkHandler";

import * as S from "./DocsInfo.styles";

interface Props {
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const scrollText = `import { ScrollParallax } from 'react-just-parallax';

<div className='wrapper'>
  <ScrollParallax isAbsolutelyPositioned>
    <span className='ring'/>
  </ScrollParallax>
</div>
`;

const mouseText = `import { MouseParallax } from 'react-just-parallax';

<div className='wrapper'>
  <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
    <span className='ring'/>
  </MouseParallax>
</div>
`;

export const DocsInfo = (props: Props) => {
  const { scrollContainerRef } = props;

  return (
    <>
      <S.Container>
        <S.Title>📜 Docker is your friend</S.Title>
        <S.Paragraph>
          Read the{" "}
          <LinkHandler
            isExternal
            elHref="https://www.npmjs.com/package/react-just-parallax"
          >
            <S.InlineLink>documentation</S.InlineLink>
          </LinkHandler>
        </S.Paragraph>
      </S.Container>
    </>
  );
};
