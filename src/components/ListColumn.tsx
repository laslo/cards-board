import styled from 'styled-components';

const ListColumn = styled.div`
  width: var(--list-width);
  height: calc(100% - 8px - 17px);
  background-color: var(--color-gray-100);
  //& > * {
  //  background-color: var(--color-gray-100);
  //}
`;

export default ListColumn;
