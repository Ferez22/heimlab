import React from "react";

import { LinkHandler } from "@/components/LinkHandler/LinkHandler";
import { CONFIG } from "@/config-global";

import * as S from "./DocsInfo.styles";

interface Props {
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const DocsInfo = (props: Props) => {
  return (
    <>
      <S.Container>
        <S.Title>📜 Docker is your friend</S.Title>
        <S.Paragraph>
          Read the{" "}
          <LinkHandler isExternal elHref={CONFIG.router.docs}>
            <S.InlineLink>documentation</S.InlineLink>
          </LinkHandler>
        </S.Paragraph>
      </S.Container>
    </>
  );
};
