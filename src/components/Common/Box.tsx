import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
} from 'styled-system';

const Box = styled.div<SpaceProps & ColorProps & LayoutProps & ShadowProps>`
  ${space}
  ${color}
  ${layout}
  ${shadow}
`;

export default Box;
