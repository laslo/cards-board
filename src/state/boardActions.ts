export type BoardAction =
  | { type: 'list/add', label: string }
  | { type: 'list/rename', listId: number, label: string }
  | { type: 'list/moveLeft', position: number }
  | { type: 'list/moveRight', position: number }
  | { type: 'list/delete', position: number }
  | { type: 'card/add', listId: number, title: string }
  | { type: 'card/rename', cardId: number, listId: number, title: string }
  | { type: 'card/moveLeft', cardPosition: number, listPosition: number }
  | { type: 'card/moveRight', cardPosition: number, listPosition: number }
  | { type: 'card/moveUp', cardPosition: number, listPosition: number }
  | { type: 'card/moveDown', cardPosition: number, listPosition: number }
  | { type: 'card/delete', cardPosition: number, listPosition: number }
;

export const addList = (label: string): BoardAction => ({
  type: 'list/add',
  label,
});

export const moveListLeft = (position: number): BoardAction => ({
  type: 'list/moveLeft',
  position,
});

export const moveListRight = (position: number): BoardAction => ({
  type: 'list/moveRight',
  position,
});

export const deleteList = (position: number): BoardAction => ({
  type: 'list/delete',
  position,
});

export const renameList = (listId: number, label: string): BoardAction => ({
  type: 'list/rename',
  listId,
  label,
});

export const addCard = (listId: number, title: string): BoardAction => ({
  type: 'card/add',
  listId,
  title,
});

export const renameCard = (cardId: number, listId: number, title: string): BoardAction => ({
  type: 'card/rename',
  cardId,
  listId,
  title,
});

export const moveCardUp = (cardPosition: number, listPosition: number): BoardAction => ({
  type: 'card/moveUp',
  cardPosition,
  listPosition
});

export const moveCardDown = (cardPosition: number, listPosition: number): BoardAction => ({
  type: 'card/moveDown',
  cardPosition,
  listPosition
});

export const moveCardLeft = (cardPosition: number, listPosition: number): BoardAction => ({
  type: 'card/moveLeft',
  cardPosition,
  listPosition
});

export const moveCardRight = (cardPosition: number, listPosition: number): BoardAction => ({
  type: 'card/moveRight',
  cardPosition,
  listPosition
});

export const deleteCard = (cardPosition: number, listPosition: number): BoardAction => ({
  type: 'card/delete',
  cardPosition,
  listPosition
});
