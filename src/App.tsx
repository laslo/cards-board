import React, { FC, useContext } from 'react';
import AppBar from './components/AppBar';
import Layout from './components/Layout';
import Board from './components/Board';
import BoardList from './components/BoardList';
import BoardState from './state/boardState';
import AddList from './components/AddList';

const App: FC = () => {
  const { state: { lists } } = useContext(BoardState);
  return (
    <Layout>
      <AppBar>
      </AppBar>

      <Board>
        {lists.map((list, position) => (
          <BoardList
            {...list}
            position={position}
            isLast={position === lists.length - 1}
            key={list.id}
          />
        ))}
        <AddList />
      </Board>
    </Layout>
  );
}

export default App;
