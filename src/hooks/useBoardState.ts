import { Dispatch, useEffect, useReducer } from 'react';
import boardReducer from '../state/boardReducer';
import { BoardStateStructure, initialBoardState } from '../state/boardState';
import { BoardAction } from '../state/boardActions';

const useBoardState = (): [BoardStateStructure, Dispatch<BoardAction>] => {
  const cached = localStorage.getItem('boardState');
  const initialState = cached ? JSON.parse(cached) as BoardStateStructure : initialBoardState;
  const [ state, dispatch ] = useReducer(boardReducer, initialState);

  useEffect(
    () => localStorage.setItem('boardState', JSON.stringify(state)),
    [ state ]
  );

  return [ state, dispatch ];
};

export default useBoardState;
