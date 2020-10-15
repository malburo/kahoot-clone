/* eslint-disable react/require-default-props */
import CorrectIcon from '@/assets/images/correct.svg';
import WrongIcon from '@/assets/images/wrong.svg';
import { Image } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';
import Box from '../Common/Box';

interface Props {
  type: string;
  children: any;
  correct?: boolean;
}

const Answer = styled.a<Props>`
  display: inline-block;
  border-radius: 5px;
  padding: 30px;
  width: 100%;
  word-wrap: break-word;
  color: white;
  border: 2px solid white;
  font-size: 30px;
  background: ${props =>
    (props.type === 'A' && 'rgb(226, 27, 60)') ||
    (props.type === 'B' && 'rgb(19, 104, 206)') ||
    (props.type === 'C' && 'rgb(216, 158, 0)') ||
    (props.type === 'D' && 'rgb(38, 137, 12)')};
  &:hover {
    color: white;
    background: ${props =>
      (props.type === 'A' && 'rgb(208, 25, 55)') ||
      (props.type === 'B' && 'rgb(18, 96, 190)') ||
      (props.type === 'C' && 'rgb(199, 146, 0)') ||
      (props.type === 'D' && 'rgb(35, 126, 11)')};
  }
  ${props =>
    !props.correct &&
    props.correct !== undefined &&
    css`
      opacity: 0.3;
    `}
`;

function AnswerCard({ type, children, correct }: Props) {
  return (
    <Answer type={type} correct={correct}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {children}
        {correct !== undefined && correct && (
          <Image src={CorrectIcon} height={50} width={40} />
        )}
        {correct !== undefined && !correct && (
          <Image src={WrongIcon} height={50} width={40} />
        )}
      </Box>
    </Answer>
  );
}

export default AnswerCard;
