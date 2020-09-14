import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from 'styled-system';

const Text = styled.div<SpaceProps & ColorProps & TypographyProps>`
  ${space}
  ${color}
  ${typography}
`;

export default Text;
