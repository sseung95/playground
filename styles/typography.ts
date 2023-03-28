import { css } from '@emotion/react';

export const typography = {
  heading1: css`
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 360px) {
      font-size: 36px;
    }
  `,
  heading2: css`
    font-size: 3.8rem;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 360px) {
      font-size: 3.2rem;
      line-height: 1.2;
    }
  `,
  heading3: css`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 360px) {
      font-size: 2.4rem;
      line-height: 1.4;
    }
  `,
  heading4: css`
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  `,
  subheading: css`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.5;
  `,
  body1: {
    bold: css`
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 700;
    `,
    medium: css`
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 500;
    `,
    light: css`
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 300;
    `,
  },
  body2: {
    bold: css`
      font-size: 1.4rem;
      line-height: 1.5;
      font-weight: 700;
    `,
    medium: css`
      font-size: 1.4rem;
      line-height: 1.5;
      font-weight: 500;
    `,
    light: css`
      font-size: 1.4rem;
      line-height: 1.5;
      font-weight: 300;
    `,
  },
  caption: {
    bold: css`
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 700;
    `,
    medium: css`
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 500;
    `,
    light: css`
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 300;
    `,
  },
};
