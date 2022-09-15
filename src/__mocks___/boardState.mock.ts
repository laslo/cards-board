import { BoardStateStructure } from '../state/boardState';

const boardStateMock: BoardStateStructure = {
  lists: [
    {
      id: 0,
      label: 'To Do',
      cards: [],
    },
    {
      id: 1,
      label: 'In Progress',
      cards: [
        {
          id: 0,
          title: 'First',
        },
        {
          id: 1,
          title: 'Second',
        },
        {
          id: 2,
          title: 'Third',
        },
      ],
    },
    {
      id: 2,
      label: 'Done',
      cards: [],
    },
  ]
};

export default boardStateMock;
