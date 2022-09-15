import { Reducer } from 'react';
import { BoardStateStructure } from './boardState';
import makeList from '../utils/makeList';
import { BoardAction } from './boardActions';
import makeCard from '../utils/makeCard';
import moveElementUp from '../utils/array/moveElementUp';
import moveElementDown from '../utils/array/moveElementDown';
import removeElement from '../utils/array/removeElement';
import selectListCards from './selectListCards';

const boardReducer: Reducer<BoardStateStructure, BoardAction> = (state, action) => {
  switch (action.type) {
    case 'list/add':
      return {
        ...state,
        lists: [
          ...state.lists,
          makeList(action.label)
        ],
      }
    case 'list/rename':
      return {
        ...state,
        lists: state.lists.map(list => list.id !== action.listId ? list : {
          ...list,
          label: action.label,
        }),
      };
    case 'list/moveLeft':
      if (action.position <= 0) return state;
      return {
        ...state,
        lists: moveElementUp(state.lists, action.position),
      };
    case 'list/moveRight':
      if (action.position >= state.lists.length - 1) return state;
      return {
        ...state,
        lists: moveElementDown(state.lists, action.position),
      };
    case 'list/delete':
      return {
        ...state,
        lists: removeElement(state.lists, action.position),
      };
    case 'card/add':
      return {
        ...state,
        lists: state.lists.map(list => list.id !== action.listId ? list : {
          ...list,
          cards: [
            ...list.cards,
            makeCard(action.title),
          ],
        }),
      };
    case 'card/rename':
      return {
        ...state,
        lists: state.lists.map(list => list.id !== action.listId ? list : {
          ...list,
          cards: list.cards.map(card => card.id !== action.cardId ? card : {
            ...card,
            title: action.title,
          }),
        }),
      };
    case 'card/moveUp': {
      if (action.cardPosition <= 0) return state;
      return {
        ...state,
        lists: state.lists.map((list, position) => position === action.listPosition
          ? {
            ...list,
            cards: moveElementUp(list.cards, action.cardPosition),
          }
          : list
        )
      };
    }
    case 'card/moveDown': {
      if (action.cardPosition >= selectListCards(state, action.listPosition).length - 1) return state;
      return {
        ...state,
        lists: state.lists.map((list, position) => position === action.listPosition
          ? {
            ...list,
            cards: moveElementDown(list.cards, action.cardPosition),
          }
          : list
        )
      };
    }
    case 'card/moveLeft': {
      if (action.listPosition <= 0) return state;
      return {
        ...state,
        lists: state.lists.map((list, position) => position === action.listPosition - 1
          ? {
            ...list,
            cards: [
              ...list.cards,
              selectListCards(state, action.listPosition)[action.cardPosition],
            ],
          }
          : position === action.listPosition
            ? {
              ...list,
              cards: removeElement(list.cards, action.cardPosition),
            }
            : list
        )
      };
    }
    case 'card/moveRight': {
      if (action.listPosition >= state.lists.length - 1) return state;
      return {
        ...state,
        lists: state.lists.map((list, position) => position === action.listPosition
          ? {
            ...list,
            cards: removeElement(list.cards, action.cardPosition),
          }
          : position === action.listPosition + 1
            ? {
              ...list,
              cards: [
                ...list.cards,
                selectListCards(state, action.listPosition)[action.cardPosition],
              ],
            }
            : list
        )
      };
    }
    case 'card/delete':
      return {
        ...state,
        lists: state.lists.map((list, position) => position === action.listPosition
          ? {
            ...list,
            cards: removeElement(list.cards, action.cardPosition),
          }
          : list
        ),
      }
  }
  return state;
};

export default boardReducer;
