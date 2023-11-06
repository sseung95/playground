import { color, colorPalette } from '@/styles/color';
import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import Link from 'next/link';

const InteractiveContainer = () => {
  return (
    <Container>
      <LinkButton>
        <Link href={'/interactive/card'}>카드 뒤집기 👉</Link>
      </LinkButton>
    </Container>
  );
};

export default InteractiveContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LinkButton = styled.button`
  ${typography.heading4};
  background-color: ${colorPalette.blue.blue50};
  padding: 12px 20px;
  border-radius: 12px;

  a {
    color: ${colorPalette.gray.gray5};
  }
`;
