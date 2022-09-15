import { render, screen } from '@testing-library/react';
import BoardList from '../../components/BoardList';
import userEvent from '@testing-library/user-event';

describe('BoardList', () =>{
  render(
    <BoardList
      id={0}
      label="Test Label"
      cards={[]}
      position={1}
      isLast={false}
    />
  );

  it ('has given heading label', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Test Label');
  });
});
