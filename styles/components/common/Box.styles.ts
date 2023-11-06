import { typography } from '@/styles/typography';
import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BoxTitle = styled.h2`
  ${typography.heading4}
  margin-bottom: 2rem;
`;

export const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
