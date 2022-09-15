import styled from 'styled-components';

const Board = styled.section`
  display: flex;
  overflow-x: auto;
  background-color: var(--color-green-400);
  padding: 14px 0 6px;

  > * {
    flex: 0 0 auto;
    margin-left: var(--gap);
  }
  &::after {
    content: '';
    flex: 0 0 var(--gap);
  }
`;

export default Board;
