import { Card } from '../types/Card.type';

const makeCard = (title: string): Card => ({
  id: Date.now(),
  title,
});

export default makeCard;
