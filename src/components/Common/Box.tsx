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
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system';

const Box = styled.div<
  SpaceProps &
    ColorProps &
    LayoutProps &
    ShadowProps &
    BorderProps &
    FlexboxProps &
    PositionProps
>`
  ${space}
  ${color}
  ${layout}
  ${shadow}
  ${border}
  ${flexbox}
  ${position}
`;

export default Box;
