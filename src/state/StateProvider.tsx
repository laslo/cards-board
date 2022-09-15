import { FC, ReactNode } from 'react';
import BoardState from './boardState';
import useBoardState from '../hooks/useBoardState';

interface StateProviderProps {
  children: ReactNode;
};

const StateProvider: FC<StateProviderProps> = ({
  children
}) => {
  const [ state, dispatch ] = useBoardState();
  return (
    <BoardState.Provider value={{ state, dispatch }}>
      {children}
    </BoardState.Provider>
  );
}

export default StateProvider;
