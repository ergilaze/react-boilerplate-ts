import { css } from 'styled-components';

const sizes: {[key: string]: number} = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  input: 400,
  height: 650,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc: {[key: string]: any}, label: string) => {
  acc[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em), (max-height: ${sizes.height / 16}em) {
      ${css(literals, ...args)}
    }
  `;

  return acc;
}, {});

export default media;
