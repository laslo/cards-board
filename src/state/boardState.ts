import { createContext, Dispatch } from 'react';
import { List } from '../types/List.type';
import { BoardAction } from './boardActions';

export interface BoardStateStructure {
  lists: List[];
}

export const initialBoardState = {
  lists: [],
};

const BoardState = createContext<{
  state: BoardStateStructure,
  dispatch: Dispatch<BoardAction>
}>({
  state: initialBoardState,
  dispatch: () => null,
});

export default BoardState;
