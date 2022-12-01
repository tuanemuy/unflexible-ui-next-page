import React from "react";
import { styled } from "@linaria/react";
import Head from "next/head";

export interface Props {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  ogImage?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  fixHeader?: boolean;
  color?: string;
  children?: React.ReactNode;
}

export const Page = ({
  title,
  description,
  path,
  ogType,
  ogImage,
  header,
  footer,
  fixHeader,
  color,
  children,
}: Props) => {
  return (
    <PageComponent color={color || "inherit"}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITEURL}/${path}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={ogType || "article"} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={ogImage || process.env.NEXT_PUBLIC_OG_IMAGE || ""}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITENAME}
        />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <Layout>
        {header && <HeaderArea fixed={fixHeader || false}>{header}</HeaderArea>}

        <MainArea>{children}</MainArea>

        {footer && <FooterArea>{footer}</FooterArea>}
      </Layout>
    </PageComponent>
  );
};

type PageComponentProps = {
  color: string;
};

const PageComponent = styled.div<PageComponentProps>`
  position: relative;
  display: block;
  z-index: 2;
  width: 100%;
  background-color: ${(p) => p.color};
`;

const Layout = styled.div`
  position: relative;
  width: 100%;
`;

interface HeaderAreaProps {
  fixed: boolean;
}

const HeaderArea = styled.div<HeaderAreaProps>`
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`;

const MainArea = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const FooterArea = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;
