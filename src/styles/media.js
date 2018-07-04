// @flow
import { css } from 'styled-components';

type MediaType<T> = {
  XS: T,
  SM: T,
  MD: T,
  LG: T,
  XL: T,
};

type SizeConfigType = {
  type: string,
  unit: string,
};

const SIZES: MediaType<SizeConfigType> = {
  XS: {
    type: 'max-width',
    unit: '576px',
  },
  SM: {
    type: 'min-width',
    unit: '576px',
  },
  MD: {
    type: 'min-width',
    unit: '768px',
  },
  LG: {
    type: 'min-width',
    unit: '992px',
  },
  XL: {
    type: 'min-width',
    unit: '1200px',
  },
};

const MEDIA: MediaType<Function> = Object.keys(SIZES).reduce(
  (accumulator, currentValue) => {
    const { type, unit } = SIZES[currentValue];

    return {
      ...accumulator,
      [currentValue]: (...style) => css`
        @media (${type}: ${unit}) {
          ${css(...style)}
        }
      `,
    };
  },
  {
    XS: style => style,
    SM: style => style,
    MD: style => style,
    LG: style => style,
    XL: style => style,
  },
);

export default MEDIA;
