import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import React from 'react';
import ImageUploader from '../common/ImageUploader/ImageUploader';

const CompoList = () => {
  return (
    <CompoListContainer>
      <CompoContainer>
        <h2>이미지 업로더</h2>
        <Body>
          <CheckList>
            <Check>
              <input
                type="checkbox"
                name="check1"
                id="check1"
                checked={true}
                disabled
              />
              <label htmlFor="check1">영역을 클릭해서 이미지 업로드</label>
            </Check>
            <Check>
              <input
                type="checkbox"
                name="check2"
                id="check2"
                checked={true}
                disabled
              />
              <label htmlFor="check2">이미지 미리보기</label>
            </Check>
            <Check>
              <input
                type="checkbox"
                name="check3"
                id="check3"
                checked={true}
                disabled
              />
              <label htmlFor="check3">이미지 삭제</label>
            </Check>
            <Check>
              <input type="checkbox" name="check4" id="check4" readOnly />
              <label htmlFor="check4">drag and drop 업로드 기능 구현</label>
            </Check>
          </CheckList>
          <ImageUploader />
        </Body>
      </CompoContainer>
    </CompoListContainer>
  );
};

export default CompoList;

const CompoListContainer = styled.div``;

const CompoContainer = styled.div`
  h2 {
    ${typography.heading4}
    margin-bottom: 2rem;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CheckList = styled.ul`
  > li + li {
    margin-top: 0.8rem;
  }
`;
const Check = styled.li`
  display: flex;
  gap: 0.4rem;

  input,
  label {
    cursor: pointer;
  }

  ${typography.body2.medium}
`;
