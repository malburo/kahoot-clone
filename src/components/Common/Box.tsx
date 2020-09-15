import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
} from 'styled-system';

const Box = styled.div<SpaceProps & ColorProps & LayoutProps>`
  ${space}
  ${color}
  ${layout}
`;

export default Box;
