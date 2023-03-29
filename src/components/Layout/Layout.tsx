import { color } from '@/styles/color';
import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Header>
        <Link href="/" className="logo">
          SEUNG
        </Link>
        <div></div>
      </Header>
      <BodyContainer>
        <Nav>
          <ul>
            <li onClick={() => router.push('/compo')}>🧱 컴포넌트</li>
            <li onClick={() => router.push('/etc')}>🥳 내맘대로 끄적</li>
            {/* <li onClick={() => router.push('/feat')}>기능 구현</li> */}
          </ul>
        </Nav>
        <Main>{children}</Main>
      </BodyContainer>
    </>
  );
};

export default Layout;

const Header = styled.header`
  height: 5.6rem;
  padding: 0 1.2rem;
  border-bottom: 1px solid ${color.border.default};
  display: flex;
  align-items: center;

  .logo {
    ${typography.heading4};
  }
`;

const BodyContainer = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  width: 30rem;
  min-height: 100vh;
  padding: 1.6rem;

  border-right: 1px solid ${color.border.default};

  ${typography.body1.medium};

  li {
    padding: 0.8rem 4rem 0.8rem 3.2rem;
    cursor: pointer;

    :hover {
      background-color: ${color.bg.transaprent};
    }
  }
`;

const Main = styled.main`
  min-height: 100vh;
  flex-grow: 1;
  padding: 80px;
`;
