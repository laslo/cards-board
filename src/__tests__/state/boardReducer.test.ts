import boardReducer from '../../state/boardReducer';
import boardStateMock from '../../__mocks___/boardState.mock';
import { addCard, addList, moveCardRight, moveListRight, renameCard, renameList } from '../../state/boardActions';

describe('boardReducer', () =>{
  it ('adds a new list', () => {
    const newState = boardReducer(boardStateMock, addList('New list'));
    expect(newState.lists[newState.lists.length - 1].label).toEqual('New list');
  });

  it ('adds a new card', () => {
    const newState = boardReducer(boardStateMock, addCard(1, 'New card'));
    expect(newState.lists[1].cards[newState.lists[1].cards.length - 1].title).toEqual('New card');
  });

  it ('renames a list', () => {
    const newState = boardReducer(boardStateMock, renameList(1, 'Updated'));
    expect(newState.lists[1].label).toEqual('Updated');
  });

  it ('renames a card', () => {
    const newState = boardReducer(boardStateMock, renameCard(1, 1, 'Updated'));
    expect(newState.lists[1].cards[1].title).toEqual('Updated');
  });

  it ('moves a list right', () => {
    const newState = boardReducer(boardStateMock, moveListRight(1));
    expect(newState.lists[1].label).toEqual('Done');
    expect(newState.lists[1].cards.length).toEqual(0);
    expect(newState.lists[2].label).toEqual('In Progress');
    expect(newState.lists[2].cards.length).toEqual(3);
  });

  it ('moves a card right', () => {
    const newState = boardReducer(boardStateMock, moveCardRight(1, 1));
    expect(newState.lists[1].cards.length).toEqual(2);
    expect(newState.lists[2].cards.length).toEqual(1);
    expect(newState.lists[2].cards[0].title).toEqual('Second');
  });
});
