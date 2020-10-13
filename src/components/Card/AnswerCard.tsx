import styled from 'styled-components';

interface Props {
  type: string;
}

const AnswerCard = styled.a<Props>`
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
`;

export default AnswerCard;
