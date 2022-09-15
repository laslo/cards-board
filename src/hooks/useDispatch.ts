import { Dispatch, useContext } from 'react';
import { BoardAction } from '../state/boardActions';
import BoardState from '../state/boardState';

const useDispatch = (): Dispatch<BoardAction> => {
  const { dispatch } = useContext(BoardState);
  return dispatch;
};

export default useDispatch;
