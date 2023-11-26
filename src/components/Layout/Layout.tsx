import { color } from '@/styles/color';
import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [folding, setFolding] = useState(false);

  return (
    <>
      <Header>
        <Logo>
          <Link href="/">SEUNG</Link>
        </Logo>
      </Header>
      <BodyContainer>
        <Nav folding={folding ? 'folding' : 'unfolding'}>
          <FoldingIcon
            folding={folding ? 'folding' : 'unfolding'}
            onClick={() => setFolding((prev) => !prev)}
          />
          <NavTop>
            <MenuContainer>
              <li>
                <MenuItem onClick={() => router.push('/compo/image-uploader')}>
                  🧱 컴포넌트
                </MenuItem>
                <SubMenu>
                  <li>
                    <MenuItem
                      isActive={router.pathname === '/compo/image-uploader'}
                      onClick={() => router.push('/compo/image-uploader')}
                    >
                      이미지 업로더
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem
                      isActive={
                        router.pathname === '/compo/contentEditable-textarea'
                      }
                      onClick={() =>
                        router.push('/compo/contentEditable-textarea')
                      }
                    >
                      contentEditable Textarea
                    </MenuItem>
                  </li>
                </SubMenu>
              </li>
              <li>
                <MenuItem onClick={() => router.push('/library/ckeditor')}>
                  🛠 라이브러리
                </MenuItem>
                <SubMenu>
                  <li>
                    <MenuItem
                      isActive={router.pathname === '/library/ckeditor'}
                      onClick={() => router.push('/library/ckeditor')}
                    >
                      CKEditor
                    </MenuItem>
                  </li>
                </SubMenu>
              </li>
              <li>
                <MenuItem
                  isActive={router.pathname === '/etc'}
                  onClick={() => router.push('/etc')}
                >
                  🥳 내맘대로 끄적
                </MenuItem>
              </li>
              <li>
                <MenuItem
                  isActive={router.pathname === '/interactive'}
                  onClick={() => router.push('/interactive')}
                >
                  인터랙티브 웹
                </MenuItem>
              </li>
            </MenuContainer>
          </NavTop>
          <NavBottom></NavBottom>
        </Nav>

        <Main folding={folding ? 'folding' : 'unfolding'}>{children}</Main>
      </BodyContainer>
    </>
  );
};

export default Layout;

const FoldingIcon = styled(NavigateBeforeIcon)<{ folding: string }>`
  position: absolute;
  top: 1.25rem;
  right: 0;
  transform: translateX(50%)
    ${({ folding }) => folding === 'folding' && 'rotate(180deg)'};
  padding: 0.4rem;
  box-sizing: content-box;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${color.border.default};
  border-radius: 100px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: ${color.primary};

    path {
      fill: #fff;
    }
  }
`;

const Nav = styled.nav<{ folding: string }>`
  position: relative;
  width: ${({ folding }) => `${folding === 'folding' ? 2 : 30}rem`};
  min-height: calc(100vh - 5.6rem);
  max-height: calc(100vh - 5.6rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${color.border.default};
  transition: width 0.6s;

  ${typography.body1.medium};

  li > div {
    padding: 1.2rem 4rem 1.2rem 3.2rem;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s;

    :hover {
      background-color: ${color.secondary};
    }
  }
`;

const NavTop = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Logo = styled.div`
  ${typography.heading4};
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 80vh; // ⭐️
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 26rem;
`;

const SubMenu = styled.ul`
  margin-left: 3rem;
  margin-top: 8px;
`;

const MenuItem = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => isActive && color.secondary};
  color: ${({ isActive }) => isActive && color.primary};
`;

const NavBottom = styled.div``;

const BodyContainer = styled.div`
  display: flex;
  max-height: calc(100vh - 5.6rem);
  max-width: 100vw;
`;

const Header = styled.header`
  height: 5.6rem;
  padding: 0 1.2rem;
  border-bottom: 1px solid ${color.border.default};
  display: flex;
  align-items: center;
`;

const Main = styled.main<{ folding: string }>`
  flex: 1;
  padding: 8rem;
  overflow-y: auto;
  /* max-width: ${({ folding }) =>
    `calc(100vw - ${folding === 'folding' ? 2 : 30}rem - 16rem)`}; */
`;
