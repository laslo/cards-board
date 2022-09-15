import { Card } from './Card.type';

export interface List {
  id: number;
  label: string;
  cards: Card[];
}
