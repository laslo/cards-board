import { List } from '../types/List.type';

const makeList = (label: string): List => ({
  id: Date.now(),
  label,
  cards: [],
});

export default makeList;
