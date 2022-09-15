import { BoardStateStructure } from './boardState';
import { Card } from '../types/Card.type';

const selectListCards = (state: BoardStateStructure, position: number): Card[] =>
  state.lists[position].cards;

export default selectListCards;
