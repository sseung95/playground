import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import React from 'react';

const CompoList = () => {
  return (
    <CompoListContainer>
      <CompoContainer>
        <h2>버튼</h2>
        <div></div>
      </CompoContainer>
    </CompoListContainer>
  );
};

export default CompoList;

const CompoListContainer = styled.div``;

const CompoContainer = styled.div`
  h2 {
    ${typography.heading4}
  }
`;
